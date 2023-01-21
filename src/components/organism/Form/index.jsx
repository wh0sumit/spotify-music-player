import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../../../app/features/search/searchSlice";
import { defaultPlaylists } from "../../../app/features/playlists/playlistsSlice";

import SearchBar from "../../molecules/SearchBar";
export default function Form() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    if (input === "") {
      dispatch(defaultPlaylists());
    } else {
      dispatch(searchData(input));
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSearch}>
        <div className="flex items-center justify-between mt-8 gap-40 mx-w-5xl">
          <SearchBar
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onClick={handleSearch}
          />
        </div>
      </form>
    </React.Fragment>
  );
}

