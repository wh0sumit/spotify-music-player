import React from "react";

export default function MusicCard({ name, image, type, onClick }) {
  return (
    <React.Fragment>
      <a
        href="#"
        class="block rounded-lg p-4 shadow-sm shadow-indigo-100 
        hover:shadow-gray-200 hover:bg-gray-50
        "
        onClick={onClick}
      >
        <img
          alt="Home"
          src={image}
          class="h-56 w-full rounded-xl object-cover shadow-sm my-2"
        />

        <a class="mt-2">
          <div class="text-base font-medium text-gray-900">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-md  text-xs font-medium bg-indigo-100 text-indigo-800 mt-2">
              {type === "artist" ? "Artist" : "Playlist"}
            </div>

            <div>
              <dd class="font-medium mt-2">{name}</dd>
            </div>
          </div>
        </a>
      </a>
    </React.Fragment>
  );
}
