import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";


export const SidebarData = [
  {
    title: "Overview",
    path: "/dashboard",
    icon: <AiIcons.AiOutlinePieChart />,
    cName: "nav-text",
  },

  {
    title: "Handymen",
    path: "/handymen",
    icon: <FaIcons.FaTools />,
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
    icon: <FiIcons.FiSettings />,
    cName: "nav-text",
  },

  {
    title: "Log Out",
    path: "/logout",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];