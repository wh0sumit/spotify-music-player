import React, { useState } from "react";
import MusicCard from "../../molecules/Cards/MusicCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { fetchCurrentPlaylist } from "../../../app/features/playlists/currentPlaylistSlice";
import ListCard from "../../molecules/Cards/ListCard";

export default function Playlists() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const playlists = useSelector((state) => state.playlists.playlists);
  console.log(playlists);
  const dispatch = useDispatch();

  const currentPlaylist = useSelector(
    (state) => state.currentPlaylists.currentPlaylist
  );
  console.log(currentPlaylist?.tracks);

  const getPlaylistTracks = (id) => () => {
    dispatch(fetchCurrentPlaylist(id));
    setIsOpen(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      width: "50%",
      height: "60%",
      padding: "2rem",
      backgroundColor: "#181818",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-4 m-2 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        {playlists &&
          playlists.map((playlist) => (
            <MusicCard
              key={playlist.id}
              name={playlist.name}
              image={playlist.images[0].url}
              type="playlist"
              onClick={getPlaylistTracks(playlist.id)}
            />
          ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="mb-5 font-bold text-center text-md text-gray-50">
          You are viewing the tracks of the playlist:{" "}
          <span className="text-green-400">{currentPlaylist?.name}</span>
        </h1>
        {currentPlaylist?.tracks.map((track) => (
          <ListCard
            key={track.id}
            name={track.name}
            image={track.image}
            artist={track.artist}
            type="track"
          />
        ))}
      </Modal>
    </React.Fragment>
  );
}

