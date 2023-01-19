import React from "react";
import MusicCard from "../../molecules/Cards/MusicCard";

import Header from "../../organism/Header";

export default function Dashboard() {
  return (
    <React.Fragment>
      <header aria-label="Page Header" class="bg-gray-50 rounded-2xl px-4 py-8">
        <Header />
        <div className="grid grid-cols-1 gap-4 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </header>
    </React.Fragment>
  );
}

