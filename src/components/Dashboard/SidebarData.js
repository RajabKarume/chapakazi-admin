import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
import * as FrIcons from "react-icons/fr";




export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <GrIcons.GrOverview />,
    cName: "nav-text",
  },

  {
    title: "Handymen",
    path: "/handymen",
    icon: <IoIcons.IoConstructOutline />,
    cName: "nav-text",
  },
  {
    title: "Jobs",
    path: "/jobs",
    icon: <BsIcons.BsLightbulb />,
    cName: "nav-text",
  },

  {
    title: "Customers",
    path: "/customers",
    icon: <BsIcons.BsPeopleFill />,
    cName: "nav-text",
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <FrIcons.FiSettings />,
    cName: "nav-text",
  },

  {
    title: "Log Out",
    path: "/logout",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];