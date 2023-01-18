import React, {  useState } from "react";
// import {  Link } from "react-router-dom";
import Customer from "../customer/Customer";
// import Dashboard from "../Dashboard/Dashboard";
import "./Login.css"
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


function LoginForm(){

<<<<<<< HEAD
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [customer, setCustomer] = useState("")
    const [login, setLogin] = useState(false)
    // const [user, setUser] = useState([])

   
    async function handleSubmit(e){
        e.preventDefault()
        const data = {
                    username:`${username}`,
                    password: `${password}`
                }
        const responce = await fetch('admin/login',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await responce.json();
        console.log(result)

        if (responce.ok){
        localStorage.setItem("admin", result.jwt)
        localStorage.setItem("profileId", result.admin.id)
        setCustomer(result.admin.customers)
        setLogin(true)
        }else{
            alert("invalid username or password")
        }
    }
    console.log(customer)
    // const [login, setLogin] = useState(false)
    // const [handymen, setHandymen] = useState([])
    // const [customer, setCustomer] = useState([])
    // const [user, setUser] = useState([])

    // function handleSubmit(e){
    //     e.preventDefault()
    //     const data = {
    //         username:`${username}`,
    //         password: `${password}`
    //     }
    //     console.log(username)
    //     console.log(password)
    //     fetch('admin/login',{
    //         method: 'POST',
    //         headers:{
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     .then((r)=> {
    //         if (r.ok){
    //             r.json()
    //             // .then((user)=> setUser(user))
    //             .then((user)=> setHandymen(user.admin.handymen))
    //             localStorage.setItem("admin", data.token);
    //             setLogin(true)
    //         }else {
    //             alert("invalid username or password")
    //         }
    //     }

       
    //     // .then ((user)=> setCustomers(user.admin.customers))
    //     // .then ((user)=> setHandymen(user.admin.handymen))
    //     )
    // }
    // console.log(handymen)
    // // useEffect(()=>{
    // //     fetch("admins")
    // //     .then((r)=>{
    // //        if(r.ok){
    // //         r.json()
    // //         .then((user)=>setUser(user))
    // //         setLogin(true)
    // //        }else{
    // //         <p>wrong password or username</p>
    // //        }
    // //     })
    // // },[])
    // // console.log(user)
    // const customer = user.admin
    // // console.log(handymen)

    if (login === true) return  <Customer customer={customer} />

    return(
        <div className="loginformdiv">
             <div>
                <h1>Log In to Admin Dashboard</h1>
                <h2>Enter your email and password below</h2>
            </div>
            <div >
            <form className="login form"  >
                <label>Email address</label>
                <input type="text" name="email" value={username} onChange={(e)=> setUsername(e.target.value)} />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Log in</button>
            </form>
            </div>
        </div>
    )
}
export default LoginForm
=======
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
    };

    return (
      <div
        style={{
          backgroundImage: "url('img1.png')",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "32px",
            borderRadius: "8px"
          }}
        >
          <div className="info">
          <h1>Log In to Admin<br></br> Dashboard</h1>
           <p>Enter your email and password below</p>
          </div>

          <Form.Item>
           <h3>Email</h3>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <h3>Password</h3>
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn1">
              Log In
            </Button>
            <Link to="/adminSignup">
              <p id="login-btn">
                Do not have an account ?{" "}
                <span className="sign-up">Sign Up</span>
              </p>
            </Link>
          </Form.Item>
        </Form>
      </div>
    );
    };
export default LoginForm
>>>>>>> 12c2de6bfb119a431bd56dad854add1427104edf
