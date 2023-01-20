import React from "react";
import * as BiIcons from "react-icons/bi";

export default function Header() {
  return (
    <React.Fragment>
      <div class="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="flex items-center sm:justify-between sm:gap-4">
          <div class="relative hidden sm:block">
            <label class="sr-only" for="search">
              {" "}
              Search{" "}
            </label>

            <input
              class="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />

            <button
              type="button"
              class="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <BiIcons.BiSearch />
            </button>
          </div>

          <div class="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div class="flex gap-4">
              <button
                type="button"
                class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
              >
                <BiIcons.BiSearch />
              </button>

              <a
                href="#"
                class="flex items-center rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <BiIcons.BiHeart />
              </a>

              <a
                href="#"
                class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <span class="sr-only">Notifications</span>
                <BiIcons.BiBell />
              </a>
            </div>

            <button
              type="button"
              class="group flex shrink-0 items-center rounded-lg transition"
            >
              <span class="sr-only">Menu</span>
              <img
                alt="Profile"
                src={user?.images[0]?.url || "https://i.pravatar.cc/300"}
                class="h-10 w-10 rounded-full object-cover"
              />

              <p class="ml-2 hidden text-left text-xs sm:block">
                <strong class="block font-medium">{user?.display_name}</strong>

                <span class="text-gray-500"> {user?.email || ""} </span>
              </p>
            </button>
          </div>
        </div>

        <div class="mt-8">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome Back, {user.name} 🎉
          </h1>

          <p class="mt-1.5 text-sm text-gray-500"> Enjoy your day! </p>
        </div>
        <hr className="my-4" />
      </div>
    </React.Fragment>
  );
}
