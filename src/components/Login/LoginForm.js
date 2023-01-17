import React from "react";
import "./Login.css"
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      // handle form submission logic here
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

