import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from 'axios';


function AdminForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [adminId, setAdminId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if(password !== passwordConfirmation) {
          setMessage("password confirmation do not match");
        } else {
          await axios.post('/api/signup', { name, email, password, adminId });
          setMessage('Signup Successful!');
        }
      } catch (error) {
        setMessage('An error occurred, please try again.');
      }
    };

    return (
      <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-white">
            Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label className="label-white">
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
        <div className="form-row">
          <label className="label-white">
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <label className="label-white">
            Confirm Password
            <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
          </label>
        </div>
        <div className="form-row">
          <label className="label-white">
            Admin ID
            <input type="number" value={adminId} onChange={(e) => setAdminId(e.target.value)} required />
          </label>
        </div>
       
      </form>
      </div>
  );
}

export default AdminForm;
