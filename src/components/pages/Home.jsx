import React from "react";
import Button from "../atoms/Button";
import * as RiIcons from "react-icons/ri";

export default function Home() {
  const FeatureData = [
    {
      title: "Discover",
      description:
        "Discover new music and podcasts. Search for your favorite song, artist, or podcast.",
      icon: <RiIcons.RiSearch2Line />,
    },
    {
      title: "Playlists",
      description:
        "Create playlists for yourself and share them with your friends.",
      icon: <RiIcons.RiPlayList2Line />,
    },
    {
      title: "Your Library",
      description:
        "Save your favorite songs, albums, and podcasts. Listen to them offline.",
      icon: <RiIcons.RiMusic2Line />,
    },
    {
      title: "Discover",
      description:
        "Save your favorite songs, albums, and podcasts. Listen to them offline.",
      icon: <RiIcons.RiMusic2Line />,
    },
  ];
  return (
    <React.Fragment>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="absolute inset-0 h-full w-full object-cover rounded-3xl "
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Change the way you listen to music with us 🙌
              </h2>

              <p class="mt-4 text-gray-600">
                We know that you are tired of the same old music streaming apps
                in this qurantine time, and we know you got bored so we are here
                for you to change the way you listen to music. We are here to
                give you the best experience of music streaming.
              </p>
              <div className="flex gap-5 my-5">
                <Button text="Get Started 🎧" link={"/login"} />
                <Button
                  text="
                Learn More
                "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">
                We are here to give you the best experience of music streaming.
              </h2>

              <p class="mt-4 text-gray-600">
                We know that you are tired of the same old music streaming apps
                in this qurantine time, and we know you got bored so we are here
                for you to change the way you listen to music. We are here to
                give you the best experience of music streaming.
              </p>

              <div className="py-4">
                <Button text="Find More 💎" link={"/login"} />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4 sm:grid-cols-2">
              {FeatureData.map((item) => {
                return (
                  <a
                    class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      {item.icon}
                    </span>

                    <h2 class="mt-2 font-bold">{item.title}</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      {item.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
