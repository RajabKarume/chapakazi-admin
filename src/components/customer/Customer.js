import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
// import Sidebar from "./Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import "./Customer.css";

function Customer(){


    
    const [customer, setCustomer] = useState([])

    const token = localStorage.getItem("admin")
    useEffect(()=>{
        fetch("customers",{ headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
          },})
        .then((r)=>r.json())
        .then((user)=> setCustomer(user) ) 
    },[token]) 
    console.log(customer)
    
    return(
        <div className="customer">
            <div className="customer-side">
                <Dashboard />
            </div>
            <div className="customer-main">
                <MainPage customer={customer} header="Customer"/>
            </div>
        </div>
    )
}

export default Customer