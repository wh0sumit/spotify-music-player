import React from "react";
import MusicCard from "../../molecules/Cards/MusicCard";

export default function Playlists() {
     
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-4 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </React.Fragment>
  );
}

