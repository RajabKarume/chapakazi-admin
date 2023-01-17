import React from "react";
import "../customer/Customer.css";
import HandymanTable from "./HandymanTable";

function HandymanMain({ handyman}){
    
    return(
        <div className="mainpage">
            <div className="header">
                <h1>Handymen</h1>
            </div>
            <div className="table">
               
                <HandymanTable handyman={handyman}  />
                
            </div>
        </div>
    )
}

export default HandymanMain