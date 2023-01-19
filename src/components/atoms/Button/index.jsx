import React from "react";
import { NavLink } from "react-router-dom";

export default function Button({ text, size, link, isexternal, onClick }) {
  return (
    <React.Fragment>
      {isexternal ? (
        <a
          class="inline-flex  items-center justify-center rounded-lg bg-gray-100 px-4 py-2"
          href="/get-started"
          onClick={onClick}
        >
          {text}
        </a>
      ) : (
        <NavLink
          to={link}
          className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg"
          onClick={onClick}
        >
          {text}
        </NavLink>
      )}
    </React.Fragment>
  );
}

