
import React, { useState } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

const CreateBucketList = () => {
  const [formData2, setFormData] = useState({
    title: '',
    location: '',
    category: '',
    budget: '',
  });
  
  const [myFile, setFile] = useState();
  

  const { title, location, category, budget } = formData2;
  const onChange = (e) =>
    setFormData({ ...formData2, [e.target.name]: e.target.value });

  

  const onChange2 = (e) =>
    setFile(e.target.files[0]);


    

  const onSubmit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem('token');
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': token,
      },
    };

    const data = new FormData();
    data.append('title',title);
    data.append('location',location);
    data.append('category',category);
    data.append('budget',budget);
    data.append('myFile',myFile);

    
    try {
      const response = await axios.post(
        'http://localhost:8000/api/bucketlist',
        data,
        config
      );

      console.log('bucket item added');
      localStorage.setItem('token', response.data.token);
      // console.log(decode(response.data.token));
      // navigate('/popular');
      // <Link to="popular"></Link>
    } catch (e) {
      console.log(e.response.data.errors);
    }
  };
  return (

    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="w-2/3 px-10 py-6 mt-20 bg-white rounded-md shadow-md h-2/3 ">

        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="text-lg font-bold text-center text-gray-500">Add Bucket List</h1>
          <div className="mt-6 space-y-4">
          <div className="w-full">
            <div className='grid grid-cols-6'>
            <label>Name: </label>
            <input className='w-1/2 col-span-5 border-2 bg-slate-200'
                type='text'
                placeholder='Enter a name...'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
                required
              />
              </div>
          
          </div>
          
          <div className="w-full">
          <div className='grid grid-cols-6'>
            <label>Location: </label>
              <input className='w-1/2 col-span-5 border-2 bg-slate-200'
                type='text'
                placeholder='Enter the location...'
                name='location'
                value={location}
                onChange={(e) => onChange(e)}
              />
          </div>
          
          </div>

          <div className="w-full">
          <div className='grid grid-cols-6'>
            <label>Category: </label>
              <input className='w-1/2 col-span-5 border-2 bg-slate-200'
                type='text'
                placeholder='Enter the category...'
                name='category'
                value={category}
                onChange={(e) => onChange(e)}
              />
          </div>
          
          </div>
          
          

          <div className="w-full">
          <div className='grid grid-cols-6'>
            <label>Budget: </label>
              <input className='w-1/2 col-span-5 border-2 bg-slate-200'
                type='text'
                placeholder='Enter your budget...'
                name='budget'
                value={budget}
                onChange={(e) => onChange(e)}
              />
          </div>
              
          </div>

          <div className="w-full">
          <div className='grid grid-cols-6'>
            <label>Add Photo: </label>
              <input className='w-1/2 col-span-5 border-2 bg-slate-200'
                type='file'
                name='myFile'
                onChange={(e) => onChange2(e)}
              />
          </div>
              
          </div>

          
          <button className="w-1/2 py-2 font-semibold tracking-tight text-white bg-indigo-600 rounded-md drop-shadow-2xl ml-52">Add to Bucket List</button>
          </div>
          
      </form>
        </div>
    </div>
  );
};

export default CreateBucketList;