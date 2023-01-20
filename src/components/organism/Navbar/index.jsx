import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../../atoms/Button";

export default function Navbar() {
  const accessToken = useSelector((state) => state.token.access_token);

  return (
    <React.Fragment>
      <nav class="mx-auto flex max-w-5xl items-center justify-between py-4">
        <NavLink to="/">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            🎶
          </div>
        </NavLink>

        <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
          <li class="hidden lg:block">
            <NavLink to="/" className="px-3 py-2 rounded-lg">
              {" "}
              Home{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="px-3 py-2 rounded-lg">
              {" "}
              About{" "}
            </NavLink>
          </li>

          <li>
            {accessToken ? (
              <Button
                text="Logout 👋"
                size="sm"
                onClick={() => {
                  localStorage.removeItem("access_token");
                  window.location.reload();
                }}
              />
            ) : (
              <Button text="Get Started" size="sm" link="/login" />
            )}
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
