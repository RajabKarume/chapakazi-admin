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
                        <tr className="row">
                        <th>Handyman details</th>
                        <th>Handyman name</th>
                        <th>Date</th>
                        <th>Speciality</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row">
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                            <td><button>delete</button></td>
                        </tr>
                        <tr className="row">
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                            <td><button>delete</button></td>

                        </tr>
                        <tr className="row">
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                            <td><button>delete</button></td>

                        </tr>
                        <tr className="row">
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                            <td><button>delete</button></td>

                        </tr>
                        <tr className="row">
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                            <td><button>delete</button></td>

                        </tr>
                        <tr className="row">
                            <td>john@email.com</td>
                            <td>john doe</td>
                            <td>nov 10, 1997</td>
                            <td>Plumber</td>
                            <td><button>delete</button></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainPage