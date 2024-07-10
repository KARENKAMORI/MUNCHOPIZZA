import React from 'react'
import { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from 'react-router-dom'
import { FaMapMarker } from 'react-icons/fa'

const CustomerForm = () => {
    const [customerUsers, setCustomerUsers] = useState([]);
    const [customerRoles, setCustomerRoles] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [nationalId, setNationalId] = useState("");
    const [dOB, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const design = "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600";

    useEffect(() => {
        getCustomerUsers();
    }, []);

    const getCustomerUsers = () => {
        api
        .get("api/customer/")
        .then((res) => res.data)
        .then((data) => {
            setCustomerUsers(data);
            console.log(data);
        })
        .catch((err) => alert(err));
    }

    const createCustomerUsers = (e) => {
        e.preventDefault();
        api
        .post("api/customer/", {fname, lname, nationalId, dOB, gender, email, phoneNumber})
        .then((res) => {
            if(res.status === 201) {
                alert("Customer Information created");
                navigate("/customer");
            } else alert("Failed to create customer information");
            getCustomerUsers();
        })
        .catch((err) => alert(err));
    };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
            {/* Display customer Information */}
            <h2 className='text-3xl block text-center font-semibold'>Customer Information</h2>
        <form onSubmit={createCustomerUsers}>
        <div className='mt-3 flex justify-between items-center'>
            <div>
                <label htmlFor="fname" className='text-base mb-2'>First Name:</label>
                <br/>
                <input 
                type="text"
                id="fname"
                name="fname"
                required
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                className= {design}
                />
            </div>
            <div>
                <label htmlFor="lname">Last Name:</label>
                <br/>
                <input 
                type="text"
                id="lname"
                name="lname"
                required
                onChange={(e) => setLname(e.target.value)}
                value={lname}
                className= {design}
                />
            </div>
        </div>
            
        <div className='mt-3'>
            <label htmlFor="nationalId">National ID:</label>
            <br/>
            <input 
            type="text"
            id="nationalId"
            name="nationalId"
            required
            onChange={(e) => setNationalId(e.target.value)}
            value={nationalId}
            className= {design}
            />
        </div>
        
        <div className='mt-3'>
            <label htmlFor="dOB">Date of Birth:</label>
            <br/>
            <input 
            type="date"
            id="dOB"
            name="dOB"
            required
            onChange={(e) => setDOB(e.target.value)}
            value={dOB}
            className= {design}
            />
        </div>
        <div className='mt-3'>
            <label htmlFor="gender">Gender:</label>
            <br/>
            <input 
            type="text"
            id="gender"
            name="gender"
            required
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className= {design}
            />
        </div>
        

        <div className='mt-3 flex justify-between items-center'>
            <div>
                <label htmlFor="email">Email:</label>
                <br/>
                <input 
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className= {design}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <br/>
                <input 
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className= {design}
                />
            </div>
        </div>
        <div>
            <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold' type="submit">
            Submit
            </button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default CustomerForm