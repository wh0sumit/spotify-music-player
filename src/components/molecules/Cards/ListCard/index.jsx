import React from "react";

export default function ListCard({ name, image, type, artist }) {
  return (
    <React.Fragment>
      <article
        class="rounded-xl border-2 border-gray-100 bg-white my-2   hover:bg-gray-50 
      shadow-emerald-100 shadow-sm
      "
      >
        <div class="flex py-3 px-5 items-center justify-between sm:justify-start sm:space-x-4  ">
          <img
            alt="Speaker"
            src={image}
            class="h-14 w-14 rounded-lg object-cover"
          />

          <div class="ml-4">
            <h3 class="font-medium sm:text-lg">
              <p class="hover:underline">{name} </p>
              <div class="flex items-center mt-1.5 text-sm text-gray-500">
                <p class="hover:underline">{artist}</p>
              </div>
            </h3>

            <div
              className="inline-flex items-center px-2.5 py-0.5 rounded-md  text-xs font-medium bg-emerald-100
          text-emerald-800 mt-2"
            >
              {type === "artist" ? "Artist" : "Playlist"}
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}

