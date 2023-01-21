import React, { useState } from "react";
import MusicCard from "../../molecules/Cards/MusicCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { fetchCurrentPlaylist } from "../../../app/features/playlists/currentPlaylistSlice";
import ListCard from "../../molecules/Cards/ListCard";

export default function Playlists() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const playlists = useSelector((state) => state.playlists.playlists);

  const dispatch = useDispatch();

  const currentPlaylist = useSelector(
    (state) => state.currentPlaylists.currentPlaylist
  );

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
      width: "35%",
      height: "60%",
      padding: "5rem",
      backgroundColor: "#181818",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <div className="p-5 my-5 rounded-lg shadow-sm bg-gray-50 shadow-emerald-100">
        <div className="m-2 my-8 ">
          <h1 className="text-2xl font-bold text-gray-900">My Playlists 🎧</h1>
          {
            <div
              className="inline-flex items-center px-2.5 py-0.5 rounded-md  text-xs font-medium bg-emerald-100
          text-emerald-800 mt-2"
            >
              No. of playlists: {playlists && playlists.length}
            </div>
          }{" "}
          <hr className="my-5 border " />
        </div>

        <div className="grid grid-cols-1 gap-4 m-2 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {playlists &&
            playlists.map((playlist) => (
              <MusicCard
                key={playlist.id}
                name={playlist.name}
                image={playlist.images[0].url}
                owner={playlist.owner.display_name}
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
              owner={track.owner}
              type="track"
            />
          ))}
        </Modal>
      </div>
    </React.Fragment>
  );
}

