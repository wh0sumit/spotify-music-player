import React from "react";
import * as RiIcons from "react-icons/ri";
export default function SearchBar({ onClick, onChange, value }) {
  return (
    <React.Fragment>
      <div class="relative flex-1">
        <input
          class="w-full rounded-md pr-10 shadow-sm sm:text-sm
            focus:border-emerald-300 focus:ring-emerald-200 p-4 "
          id="search"
          type="search"
          placeholder="Search for your favourite music and artists here !"
          value={value}
          onChange={onChange}
          onClick={onClick}
        />

        <span
          class="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center bg-gray-100
              m-2 rounded-md text-gray-900"
        >
          <RiIcons.RiSearch2Line />
        </span>
      </div>
    </React.Fragment>
  );
}

