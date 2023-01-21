import React from "react";

export default function ListCard({ name, image, type, artist }) {
  return (
    <React.Fragment>
      <article className="my-2 bg-white border-2 border-gray-100 shadow-sm rounded-xl hover:bg-gray-50 shadow-emerald-100 ">
        <div className="flex items-center justify-between px-5 py-3 sm:justify-start sm:space-x-4 ">
          <img
            alt="Speaker"
            src={image}
            className="object-cover rounded-lg h-14 w-14"
          />

          <div className="ml-4">
            <h3 className="font-medium sm:text-lg">
              <p className="hover:underline">{name} </p>
              <div className="flex items-center mt-1.5 text-sm text-gray-500">
                <p className="hover:underline">{artist}</p>
              </div>
            </h3>

            <div className="inline-flex items-center px-2.5 py-0.5 rounded-md  text-xs font-medium bg-emerald-100 text-emerald-800 mt-2">
              {type === "artist" ? "Artist" : "Playlist"}
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}

