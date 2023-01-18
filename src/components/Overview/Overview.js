import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard/Dashboard";
import * as FaIcons from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./Overview.css"


function Overview(){

  const [trigger, setTrigger] = useState(false);
    

//     const [handyman, setHandyman] = useState([])
//     const token = localStorage.getItem("admin")
//     useEffect(()=>{
//         fetch("handymen",{ headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "Application/json",
//           },})
//         .then((r)=>r.json())
//         .then((user)=> setHandyman(user) ) 
//     },[token]) 
//     console.log(handyman)

    return (
      <div className="main-header">
        {/* <nav className="main-header"> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Overview
            </a>
          </li>

            <ul>
              {/* {" "} */}
              <li className="icons">
                <FaIcons.FaSearch />
              </li>
              <li>
                <FaIcons.FaBell />
              </li>
              <li>
                {/* <a href="#">Jones Ferdinand</a> */}
                <h4>Jones Ferdinand</h4>
                <FontAwesomeIcon
                  icon={faUser}
                  className="user-profile"
                  onClick={() => {
                    setTrigger((prev) => !prev);
                  }}
                />
              </li>
            </ul>
        
        </ul>

        {/* </nav> */}
        {/* //         <div className="customer">
//             <div className="customer-side">
//                 <Dashboard />
//             </div>
//             <div className="customer-main">
//                 <HandymanMain header="Handyman" handyman={handyman} />
//             </div>
//         </div> */}
      </div>
    );
}

export default Overview