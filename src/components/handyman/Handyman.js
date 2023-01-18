import React, { useState, useEffect } from "react";
import Sidebar from "../customer/Sidebar";
import "./Handyman.css"
import "../customer/Customer.css";
import HandymanMain from "./HandymanMain";
// import { SidebarData } from "../Dashboard/SidebarData";
import Dashboard from "../Dashboard/Dashboard";



function Handyman(){

    const [handyman, setHandyman] = useState([])
    const token = localStorage.getItem("admin")
    useEffect(()=>{
        fetch("handymen",{ headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
          },})
        .then((r)=>r.json())
        .then((user)=> setHandyman(user) ) 
    },[token]) 
    console.log(handyman)

    return(
        <div className="customer">
            
            <div className="customer-side">
                <Dashboard/>
            </div>
            <div className="customer-main">
                <HandymanMain header="Handyman" handyman={handyman} />
            </div>
        
        </div>
    )
}

export default Handyman