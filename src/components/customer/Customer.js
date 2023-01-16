import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import "./Customer.css";

function Customer(){

    const [customer, setCustomer] = useState([])

    // const token = localStorage.getItem("customer")
    const option = {
        method: "POST",
        headers: {
          Authorization: `Bearer Token`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(customer),
      };
    useEffect(()=>{
        fetch("customer",option)
        .then((r)=>r.json())
        .then((data)=> setCustomer(data) ) 
    },[]) 
    console.log(customer)

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