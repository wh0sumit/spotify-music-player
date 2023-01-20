import React from "react";

export default function MusicCard({ name, image, type, onClick, owner }) {
  return (
    <React.Fragment>
      <div
        class="block rounded-lg p-6
        hover:shadow-emerald-200 hover:bg-emerald-50 shadow-emerald-100 shadow-sm 
        "
        onClick={onClick}
      >
        <img
          alt="Home"
          src={image}
          class="h-56 w-full rounded-xl object-cover 
            shadow-emerald-300
            shadow-sm my-2"
        />

        <div class="mt-2">
          <div
            class="text-base font-medium text-gray-900
            flex justify-between
          "
          >
            <div
              className="inline-flex items-center px-2.5 py-0.5 rounded-md  text-xs font-medium bg-emerald-100
          text-emerald-800 mt-2"
            >
              {type === "artist" ? "Artist" : "Playlist"}
            </div>
            <div
              className="inline-flex items-center px-2.5 py-0.5 rounded-full  text-xs font-medium bg-black
          text-white mt-2"
            >
              playlist by : @{owner}
            </div>
          </div>
          <div>
            <p class="font-medium mt-2">{name}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
