import React from "react";
import "./Customer.css";


function MainPage(){

    return(
        <div className="mainpage">
            <div className="header">
                <h1>Customer</h1>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                        <th>Handyman details</th>
                        <th>Handyman name</th>
                        <th>Date</th>
                        <th>Speciality</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                        </tr>
                        <tr>
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                        </tr>
                        <tr>
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                        </tr>
                        <tr>
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                        </tr>
                        <tr>
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                        </tr>
                        <tr>
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainPage