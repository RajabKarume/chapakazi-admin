import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Dashboard.css';
import { IconContext }from 'react-icons';

// import Handyman from '../handyman/Handyman';
// import Customer from '../customer/Customer';



// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import * as FaIcons from "react-icons/fa";


function Dashboard() {

    const [sidebar, setSidebar] = useState(false);
    // const showSidebar = () => setSidebar(!sidebar);
    // const [trigger, setTrigger] = useState(false)

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
      
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
          
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

  );
}

export default Dashboard
