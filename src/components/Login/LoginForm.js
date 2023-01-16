import React, { useState } from "react";
import { json } from "react-router-dom";
import "./Login.css"


function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])
    // const [handymen, setHandymen] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const data = {
            username:`${username}`,
            password: `${password}`
        }
        fetch('admin/login',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then((r)=> r.json()
        .then((user)=> setData(user.admin))
        // .then ((user)=> setCustomers(user.admin.customers))
        // .then ((user)=> setHandymen(user.admin.handymen))
        )
    }
    console.log(data.handymen)
    // console.log(handymen)


    return(
        <div className="loginformdiv">
             <div>
                <h1>Log In to Admin Dashboard</h1>
                <h2>Enter your email and password below</h2>
            </div>
            <div >
            <form className="login form" onSubmit={handleSubmit} >
                <label>Email address</label>
                <input type="text" name="email" value={username} onChange={(e)=> setUsername(e.target.value)} />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button>Login</button>
            </form>
            </div>
        </div>
    )
}
export default LoginForm