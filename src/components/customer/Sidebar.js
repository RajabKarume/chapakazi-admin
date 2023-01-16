import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";



function Sidebar(){

    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <h1 className="sidebar-h1">Admin Dashboard</h1>
            </div>
            <div className="sidebar-options">
                <div className="options">
                    <img alt="" className="options-icon" src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" />
                    <div className="option-info">
                        <span className="option-name">Overview</span>
                    </div>
                </div>
                <Link to="/handyman" >
                    <div className="options">
                        <img alt="" className="options-icon" src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" />
                        <div className="option-info">
                            <span className="option-name">Handymen</span>
                        </div>
                    </div>
                </Link>
                <div className="options">
                    <img alt="" className="options-icon" src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" />
                    <div className="option-info">
                        <span className="option-name">Jobs</span>
                    </div>
                </div>
                <Link to="/customer" >
                    <div className="options">
                        <img alt="" className="options-icon" src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" />
                        <div className="option-info">
                            <span className="option-name">Customers</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="sidebar-bottom">
                <div className="options">
                    <img alt="" className="options-icon" src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" />
                    <div className="option-info">
                        <span className="option-name">Settings</span>
                    </div>
                </div>
                <Link to="/">
                    <div className="options">
                        <img alt="" className="options-icon" src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" />
                        <div className="option-info">
                            <span className="option-name">Log out</span>
                        </div>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Sidebar