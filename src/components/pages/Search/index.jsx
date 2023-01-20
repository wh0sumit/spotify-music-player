import React from "react";

export default function Search() {
  const tags = ["Tracks", "Artists", "Albums", "Playlists"];
  return (
    <React.Fragment>
      <div class="bg-gray-50 rounded-lg shadow-emerald-100 shadow-sm p-5 my-5">
        <div className="m-2 my-8 ">
          <h1 className="text-2xl font-bold text-gray-900">
            Search for your favourite music and artists here !
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
              No. of results : 0
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

