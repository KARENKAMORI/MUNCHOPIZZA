import React from 'react'
import { useState } from 'react'
import api from "../api"
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

const Form = ({ route, method }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const design = "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600";

    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();

      try{
        const res = await api.post(route, { username, password })
        if (method === "login") {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
          localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
          navigate("/customer")
        } else {
          navigate("/login")
        }
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
      <h1 className='text-3xl block text-center font-semibold'>{name}</h1>
    <form onSubmit={handleSubmit} className='form-container'>
    <div className='mt-3 flex justify-between items-center'>
    <label htmlFor="username" className='text-base mb-2'>Username:</label>
      <input 
      type="text" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Enter Username'
      className= {design}
      />
    </div>

    <div className='mt-3 flex justify-between items-center'>
    <label htmlFor="password" className='text-base mb-2'>Password:</label>
      <input 
      type="password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Enter Password'
      className= {design}
      />
      </div>
      <div className='mt-5'>
        <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold' type="submit">{name}</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Form