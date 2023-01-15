import React from "react";
import "./Customer.css";



function Sidebar(){

    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Admin Dashboard</h1>
            </div>
            <div className="sidebar-options">
                <ul>
                    <li>Overview</li>
                    <li>Handymen</li>
                    <li>Jobs</li>
                    <li>Customers</li>
                </ul>
            </div>
            <div className="sidebar-bottom">
                <ul>
                    <li>Settings</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar