import React, { useState } from "react";

import { useSelector } from "react-redux";
import MusicCard from "../../molecules/Cards/MusicCard";
import Form from "../../organism/Form";
import * as RiIcons from "react-icons/ri";

export default function Search() {
  const [openTab, setOpenTab] = useState(1);
  const search = useSelector((state) => state.search);
  const searchValue = search.search;
  const tags = ["Tracks", "Artists", "Albums", "Playlists"];

  const playlistsTab = () => {
    return (
      <>
        {searchValue.playlists.map((playlist) => (
          <MusicCard
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            image={playlist.images[0]?.url}
            owner={playlist.owner.display_name}
            type="playlist"
          />
        ))}
      </>
    );
  };
  const tracksTab = () => {
    return (
      <>
        {searchValue.tracks.map((track) => (
          <MusicCard
            key={track.id}
            id={track.id}
            name={track.name}
            image={track.album.images[0]?.url}
            type="track"
          />
        ))}
      </>
    );
  };
  const artistsTab = () => {
    return (
      <>
        {searchValue.artists.map((artist) => (
          <MusicCard
            key={artist.id}
            id={artist.id}
            name={artist.name}
            image={artist.images[0]?.url}
            type="artist"
          />
        ))}
      </>
    );
  };
  const albumsTab = () => {
    return (
      <>
        {searchValue.albums.map((album) => (
          <MusicCard
            key={album.id}
            id={album.id}
            name={album.name}
            image={album.images[0]?.url}
            type="album"
          />
        ))}
      </>
    );
  };

  const tabs = [
    {
      id: 1,
      name: "Playlists",
      icon: <RiIcons.RiMusicLine />,
      active: false,
      component: playlistsTab(),
    },
    {
      id: 2,
      name: "Tracks",
      icon: <RiIcons.RiListOrdered />,
      active: false,
      component: tracksTab(),
    },
    {
      id: 3,
      name: "Artists",
      icon: <RiIcons.RiUserAddLine />,
      active: false,
      component: artistsTab(),
    },
    {
      id: 4,
      name: "Albums",
      icon: <RiIcons.RiGalleryLine />,
      active: false,
      component: albumsTab(),
    },
  ];

  return (
    <React.Fragment>
      <div class="bg-gray-50 rounded-lg shadow-emerald-100 shadow-sm p-10 my-5">
        <div className="m-2 my-8 ">
          <h1 className="text-2xl font-bold text-gray-900">
            Search for your favourite music and artists here 🤩
          </h1>
          <div className="flex justify-between">
            <div className="flex gap-3 ">
              {tags.map((tag) => (
                <div
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md  text-xs font-medium bg-emerald-100
          text-emerald-800 mt-2"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div
              className="inline-flex items-center px-2.5 py-0.5 rounded-md  text-xs font-medium bg-emerald-100
          text-emerald-800 mt-2"
            >
              No. of results : {searchValue.tracks.length}
            </div>
          </div>
        </div>
        <Form />
        {search.search.tracks.length > 0 ? (
          <div className="container mx-auto mt-12">
            <div>
              <ul className="flex flex-row flex-wrap justify-center p-5 pt-3 pb-4 mb-0 list-none ">
                {tabs.map((tab) => (
                  <li key={tab.id} className="text-center hover:cursor-pointer">
                    <div
                      onClick={() => setOpenTab(tab.id)}
                      className={`text-sm mx-2 font-medium ${
                        tab.id === openTab ? "bg-green-200 text-green-900" : ""
                      } px-4 py-2 text-gray-600 bg-white rounded shadow flex
                      items-center justify-center
                      `}
                    >
                      {tab.name}
                      <span className={"ml-2"}>{tab.icon}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-4 m-2 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                {tabs.map((tab) => {
                  if (tab.id === openTab) {
                    return tab.component;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}

