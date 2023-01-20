import React from "react";
import * as RiIcons from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Playlists from "../../Template/Playlists";
import Artists from "../../Template/Artists";
import Tracks from "../../Template/Tracks";

export default function Dashboard() {
  const TabsData = [
    {
      id: 1,
      title: "All Playlists",
      status: "active",
      href: "/playlists",
      component: <Playlists />,
      icon: <RiIcons.RiPlayList2Line />,
    },
    {
      id: 2,
      title: "Tracks",
      status: "inactive",
      href: "/tracks",
      component: <Tracks />,
      icon: <RiIcons.RiMusic2Line />,
    },
    {
      id: 3,
      title: "Artists",
      status: "inactive",
      href: "/artists",
      component: <Artists />,
      icon: <RiIcons.RiUser3Line />,
    },
  ];

  return (
    <React.Fragment>
      <div aria-label="Page Content" class="bg-gray-50 rounded-2xl px-4 py-8">
        <ul
          class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
          role="tablist"
        >
          {TabsData.map((tab) => (
            <NavLink to={tab.href} key={tab.id}>
              <li class="flex-1">
                <a class="relative block p-4" href="">
                  <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

                  <div class="flex items-center justify-center">
                    {tab.icon}

                    <span class="ml-3 text-sm font-medium text-gray-900">
                      {" "}
                      {tab.title}
                    </span>
                  </div>
                </a>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
