import React from "react";
import "./Login.css"


function LoginForm(){

    return(
        <div className="loginformdiv">
             <div>
                <h1>Log In to Admin Dashboard</h1>
                <h2>Enter your email and password below</h2>
            </div>
            <div >
                <p>Email address</p>
                <form className="login form" >
                    <input type="text" name="email" />
                </form>
                <p>Password</p>
                <form>
                    <input type="password" name="password" />
                </form>
                

            </div>
        </div>
    )
}
export default LoginForm