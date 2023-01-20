import React from "react";
import Playlists from "../../Template/Playlists";
import Tracks from "../../Template/Tracks";
import Artists from "../../Template/Artists";

import * as RiIcons from "react-icons/ri";
import { NavLink } from "react-router-dom";

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

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
            role="tablist"
          >
            {TabsData.map((tab, index) => {
              return (
                <NavLink to={tab.href} key={index}>
                  <li
                    className="flex-auto mr-2 -mb-px text-center last:mr-0"
                    key={index}
                  >
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === tab.id
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(tab.id);
                      }}
                      data-toggle="tab"
                      href={"#" + tab.href}
                      role="tablist"
                      key={index}
                    >
                      <div className="flex flex-row items-center justify-center">
                        <div className="mr-2">{tab.icon}</div>
                        <div>{tab.title}</div>
                      </div>
                    </a>
                  </li>
                </NavLink>
              );
            })}
          </ul>
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                {TabsData.map((tab, index) => {
                  return (
                    <div
                      className={openTab === tab.id ? "block" : "hidden"}
                      id={tab.href}
                      key={index}
                    >
                      {tab.component}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return <Tabs color="pink" />;
}

