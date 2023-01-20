import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../../atoms/Button";
import * as RiIcons from "react-icons/ri";

export default function Navbar() {
  const accessToken =
    useSelector((state) => state.token.access_token) ||
    JSON.parse(localStorage.getItem("access_token"));
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_in");
    localStorage.removeItem("user");
    window.location.reload();
  };
  const user =
    useSelector((state) => state.user.user) ||
    JSON.parse(localStorage.getItem("user"));

  return (
    <React.Fragment>
      {accessToken ? (
        <nav class="mx-auto flex max-w-6xl items-center justify-between py-4 flex-wrap">
          <NavLink to="/dashboard">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              🎶
            </div>
          </NavLink>

          <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
            <li class="hidden lg:block">
              <NavLink to="/dashboard" className="px-3 py-2 rounded-lg">
                {" "}
                My Playlist 🎧{" "}
              </NavLink>
            </li>

            <li>
              <NavLink to="/search" className="px-3 py-2 rounded-lg">
                Search 🙌
              </NavLink>
            </li>

            <li>
              <Button text="Logout ☄" size="sm" onClick={logout} />
            </li>
          </ul>
        </nav>
      ) : (
        <nav class="mx-auto flex max-w-6xl items-center justify-between py-4">
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
              <Button text="Get Started" size="sm" link="/login" />
            </li>
          </ul>
        </nav>
      )}
      {accessToken && (
        <header
          aria-label="Page Header"
          class="bg-gray-50 rounded-lg shadow-emerald-100 shadow-sm"
        >
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="flex items-center sm:justify-between sm:gap-4">
              <div class="relative hidden sm:block">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Hi {user?.display_name} 👋
                </h1>

                <p class="mt-1.5 text-sm text-gray-500">
                  Welcome to your dashboard. Here you can see your playlists and
                  your recently played tracks.
                </p>
              </div>

              <div class="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                <div class="flex gap-4">
                  <button
                    type="button"
                    class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                  >
                    <span class="sr-only">Search</span>
                  </button>

                  <div class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                    <RiIcons.RiNotificationLine />
                  </div>

                  <div class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                    <RiIcons.RiHeart2Line />
                  </div>
                </div>

                <button
                  type="button"
                  class="group flex shrink-0 items-center rounded-lg transition"
                >
                  <span class="sr-only">Menu</span>
                  <img
                    alt="Man"
                    src={user?.images[0].url}
                    class="h-10 w-10 rounded-full object-cover"
                  />

                  <p class="ml-2 hidden text-left text-xs sm:block">
                    <strong class="block font-medium">
                      {user?.display_name}
                    </strong>

                    <span class="text-gray-500">
                      {user?.email || "Profile"}
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </header>
      )}
    </React.Fragment>
  );
}
