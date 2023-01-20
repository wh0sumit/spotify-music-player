import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    if (input === "") {
      console.log("empty");
      dispatch(defaultPlaylists());
    } else {
      dispatch(searchData(input));
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSearch}>
        <label class="sr-only" for="search">
          {" "}
          Search{" "}
        </label>

        <input
          class="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
          id="search"
          type="search"
          placeholder="Search website..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          class="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
        >
          <RiIcons.RiSearchLine />
        </button>
      </form>
    </React.Fragment>
  );
}

