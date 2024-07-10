import React from 'react'
import { useState, useEffect } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

const CategoryForm = () => {
    const [categoryOwner, setCategoryOwner] = useState([]);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const design = "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600";

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        api
        .get("api/category/")
        .then((res) => res.data)
        .then((data) => {
            setCategoryOwner(data);
            console.log(data);
        })
        .catch((err) => alert(err));
    }

    const deleteCategory = (id) => {
        api
        .delete(`/api/category/delete/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Category deleted!");
            else alert("Failed to delete Category.");
            getCategory();
        })
        .catch((error) => alert(error));
    };

    const createCategory = (e) => {
        e.preventDefault();
        api
        .post("api/category/", {name})
        .then((res) => {
            if (res.status === 201){
                alert("New Category Created");
                navigate("/category")
            } else alert("Failed to create category information");
            getCategory();
        })
        .catch((err) => alert(err));
    };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h2 className='text-3xl block text-center font-semibold'>Add A Pizza Category</h2>
        <form onSubmit={createCategory}>
        <div className='mt-3 flex justify-between items-center'>
        <div>
                <label htmlFor="name" className='text-base mb-2'>Category Name:</label>
                <br/>
                <input 
                type="text"
                id="name"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
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

export default CategoryForm