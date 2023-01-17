import React from "react";
import "./Login.css"
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from 'react'

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
          backgroundImage: "url('bg-image-url')",
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
          
        </Form>
      </div>
    );
    };
export default LoginForm

