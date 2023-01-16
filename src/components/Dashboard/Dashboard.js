import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Dashboard.css';
import { IconContext }from 'react-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import * as FaIcons from "react-icons/fa";


function Dashboard() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [trigger, setTrigger] = useState(false)

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-header">
        <Link to="/dashboard">
          <h1>Overview</h1>
        </Link>
        <h2>userprofile</h2>

        

        </div>

        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="dashboard-side">
            {/* <div className="header1">
            <h1>Admin Dashboard</h1> */}
            {/* </div> */}
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  {/* <AiIcons.AiOutlineCloseCircle /> */}
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Dashboard