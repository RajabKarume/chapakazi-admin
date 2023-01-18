import React, { useState } from "react";
import "../customer/Customer.css";


function HandymanTable({handyman}){

    const [status, setStatus] = useState("")
    const token = localStorage.getItem("admin")

    function handleDelete(id){
        fetch(`handymen/${id}`, { method: 'DELETE',
        headers:{
            Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
        },
    })
        .then(()=> setStatus('deleted succesfully'))

    }
    console.log(status)
    return(
        <div>
            <table>
                    <thead>
                        <tr className="row">
                        <th>image</th>
                        <th>Handyman name</th>
                        <th>location</th>
                        <th>rating</th>
                        <th>speciality</th>
                        <th>description</th>
                        <th></th>
                        </tr>
                    </thead>
                    
                    {handyman.map((handy)=>(
                        <tbody >
                        <tr key={handy.id} className="row">
                            <td className="image"></td>
                            <td>{handy.username}</td>
                            <td>{handy.location}</td>
                            <td>{handy.rating}</td>
                            <td>{handy.speciality}</td>
                            <td>{handy.description}</td>
                            <td ><button  onClick={()=>handleDelete(handy.id)}>delete</button></td>
                        </tr>
                       
                    </tbody>
                     ))} 
                </table>
        </div>
    )
}

export default HandymanTable