import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ 
      email: '', 
      password: '',
  });

  const {email,password} = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    
    let config = {
      headers: {
        'Content-Type' : 'application/json',
      },
    };
    let data = {
      email : email,
      password : password,
    }
    console.log(data);
    try {
        const response = await axios.post(
        'http://localhost:8000/api/auth',
        data,
        config
      );
      
      console.log(response);
      localStorage.setItem('token',response.data.token);
      console.log(decode(response.data.token));
      navigate('/');
      
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <form onSubmit = {(e)=>onSubmit(e)}>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
          <h1 className="text-center text-lg font-bold text-gray-500">
            Login Form
          </h1>
          <div className="space-y-4 mt-6">
            <div className="w-full">
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e)=>handleChange(e)}
                placeholder="email"
                className="px-4 py-2 bg-gray-50"
              />
            </div>
            <div className="w-full">
              <input
                 name="password"
                 type="password"
                 value={password}
                 onChange={(e)=>handleChange(e)}
                 placeholder="Password"
                className="px-4 py-2 bg-gray-50"
              />
            </div>
          </div>
          <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
            Login
          </button>
          
          <Link to="/register" className="flex items-center justify-center pt-2 font-semibold border-b-2 hover:text-indigo-600 hover:border-indigo-600">Register here</Link>
        
        </div>
      </div>
      
    </form>
  );
}
