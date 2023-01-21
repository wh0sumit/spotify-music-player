import React from "react";
export default function SearchBar({ onClick, onChange, value }) {
  return (
    <React.Fragment>
      <input
        className="w-full p-4 pr-10 rounded-md shadow-sm sm:text-sm focus:border-emerald-300 focus:ring-emerald-200 "
        id="search"
        type="search"
        placeholder="Search for your favourite track , artist , album or playlist here..."
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    </React.Fragment>
  );
}

