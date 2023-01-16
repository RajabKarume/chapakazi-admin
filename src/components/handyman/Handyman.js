import React from "react";
import Sidebar from "../customer/Sidebar";
import MainPage from "../customer/MainPage";
import "./Handyman.css"
import "../customer/Customer.css";



function Handyman(){
    return(
        <div className="customer">
            <div className="customer-side">
                <Sidebar />
            </div>
            <div className="customer-main">
                <MainPage header="Handyman" />
            </div>
        </div>
    )
}

export default Handyman