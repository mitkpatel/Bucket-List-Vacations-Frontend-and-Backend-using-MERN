import React, { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";

import {TextField,Stack, Autocomplete,Checkbox} from "@mui/material";


function AddTrip() {
  const navigate = useNavigate();


  const [city, setCity] = useState("")
  const [cityData, setCityData] = useState([])
  const [checkedStatus, setCheckedStatus] = useState(true);
  const updateStatus = () => setCheckedStatus(!checkedStatus);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const { name, description, startDate, endDate } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };

    const img =cityData.filter(
      (item => item.city.includes(city))).map((item => item.image)
    );
 
    
    let data = {
      name: name,
      city: city,
      description: description,
      startDate: startDate,
      endDate: endDate,
      img:img[0],
      status:checkedStatus,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/trips/",
        data,
        config
      );

      navigate("/trip");
    } catch (err) {
      console.log(err.response);
    }
  };
  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/city/",
      );
      console.log("console data",response.data);
      setCityData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);
  console.log("city",city)
  return (
    <div className="p-20">
      <div className="mt-8 max-w-md mx-auto">
      <div className="flex items-center mt-3 justify-center ">
          <Link to="/trip" className="p-2 border-2 border-blue-300 hover:border-blue-500 rounded-lg">Check All Trips</Link>
        </div>
        <div className="p-2 border-b-2 border-gray-400 font-normal text-2xl">Add Trip</div>
        
        <form onSubmit={(e) => onSubmit(e)} className="p-4 grid grid-cols-2 gap-4">
         
          <TextField
            name="name"
            type="text"
            value={name}
            onChange={(e) => handleChange(e)}
            placeholder="name"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
         
          <Stack>
            <Autocomplete
              options={cityData.map((item => item.city))}
              renderInput = {(params) => <TextField {...params} label='cities'/> }
              value = {city}
              onChange = {(event,newValue)=> setCity(newValue)}
              freeSolo
            />
          </Stack>

          
          <textarea
            name="description"
            type="text"
            value={description}
            onChange={(e) => handleChange(e)}
            placeholder="Add Description"
            rows="3"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 col-span-2"
            }
          >
          </textarea>

          <input
          type="checkbox"
          checked={checkedStatus}
          onChange={updateStatus}
          className="form-check-input h-5 w-5 align-bottom checked:border-logincolor checked:bg-logincolor"
        />

          <div className="col-span-2">
          <label>Start Date:</label>
          <input
            name="startDate"
            type="date"
            value={startDate}
            onChange={(e) => handleChange(e)}
            placeholder="desc"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          </div>
         

          <div className="col-span-2">
          <label>End Date:</label>
          <input
            name="endDate"
            type="date"
            value={endDate}
            onChange={(e) => handleChange(e)}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          </div>
         

          <div className="col-span-2 flex items-center mt-3 justify-center">
            <button
              className={
                "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
              }
              type="submit"
              
            >
              Add Trip
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default AddTrip;

{
  /* <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            /> */
}
