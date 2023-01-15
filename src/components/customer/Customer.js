import React from "react";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import "./Customer.css";

function Customer(){

    return(
        <div className="customer">
            <div className="customer-side">
                <Sidebar />
            </div>
            <div className="customer-main">
                <MainPage />
            </div>
        </div>
    )
}

export default Customer