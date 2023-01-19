import React from "react";

export default function MusicCard() {
  return (
    <React.Fragment>
      <div class="px-4 py-3">
        <img
          alt="Lava"
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-56 w-full rounded-xl object-cover shadow-lg transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
          <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
              Finding the Journey to Mordor
            </h3>
          </a>

          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            @ Album Name
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

