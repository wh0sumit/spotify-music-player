import React from "react";

export default function MusicCard({ name, image, type, onClick, owner }) {
  return (
    <React.Fragment>
      <div
        class="block 
         hover:bg-gray-50 hover:drop-shadow-md transition-all duration-300 border-3  rounded-xl border border-gray-100 p-5 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring  bg-white
        "
        onClick={onClick}
      >
        <img
          alt="music"
          src={image}
          class="h-56 w-full rounded-xl object-cover "
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
              {type ? type : "playlist"}
            </div>
            {owner ? (
              <div
                className="inline-flex items-center px-2.5 py-0.5 rounded-full  text-xs font-medium bg-black
          text-white mt-2"
              >
                playlist by : @{owner}
              </div>
            ) : null}
          </div>
          <div>
            <p class="font-medium mt-2">{name}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
