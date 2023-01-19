import React from "react";
import "./Customer.css";
import CustomerTable from "./CustomerTable";


function MainPage({ customer}){
    return(
        <div className="mainpage">
            <div className="header">
                <h1>Customers</h1>
            </div>
            <div className="table">
               
                <CustomerTable  customer={customer} />
                
            </div>
        </div>
    )
}

export default MainPage