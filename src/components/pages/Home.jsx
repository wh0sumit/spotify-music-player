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
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="absolute inset-0 object-cover w-full h-full rounded-3xl "
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Change the way you listen to music with us 🙌
              </h2>

              <p className="mt-4 text-gray-600">
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
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="max-w-lg mx-auto text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                We are here to give you the best experience of music streaming.
              </h2>

              <p className="mt-4 text-gray-600">
                We know that you are tired of the same old music streaming apps
                in this qurantine time, and we know you got bored so we are here
                for you to change the way you listen to music. We are here to
                give you the best experience of music streaming.
              </p>

              <div className="py-4">
                <Button text="Find More 💎" link={"/login"} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
              {FeatureData.map((item) => {
                return (
                  <a
                    className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span className="inline-block p-3 rounded-lg bg-gray-50">
                      {item.icon}
                    </span>

                    <h2 className="mt-2 font-bold">{item.title}</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
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
