import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
// import Dashboard from './Dashboard';


export const SidebarData = [
  {
    title: "Admin Dashboard",
    path: "/",
    cName: "nav-text",
  },

  {
    title: "Overview",
    path: "/dashboard",
    icon: <AiIcons.AiOutlinePieChart />,
    cName: "nav-text",
  },

  {
    title: "Handymen",
    path: "/handyman",
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
    path: "/customer",
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
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];