import React from "react";
import "./Login.css"
import LoginForm from "./LoginForm";
import Dashboard from "../Dashboard/Dashboard";


function Login(){
    


    return (
      <div className="login">
        <LoginForm />
        <Dashboard />
      </div>
    );
}

export default Login