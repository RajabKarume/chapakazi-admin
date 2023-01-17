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
      <div>

      </div>
    );
    };
export default LoginForm

