import React, { useState } from "react";


function CustomerTable({customer}){

    const [status, setStatus] = useState("")
    const token = localStorage.getItem("admin")

    function handleDelete(id){
        fetch(`customers/${id}`, { method: 'DELETE',
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
                        <th></th>
                        </tr>
                    </thead>
                    
                    {customer.map((cust)=>(
                        <tbody>
                        <tr key={cust.id} className="row">
                            <td className="image"></td>
                            <td>{cust.username}</td>
                            <td>{cust.location}</td>
                            <td><button onClick={()=>handleDelete(cust.id)}>delete</button></td>
                        </tr>
                       
                    </tbody>
                     ))} 
                </table>
        </div>
    )
}

export default CustomerTable