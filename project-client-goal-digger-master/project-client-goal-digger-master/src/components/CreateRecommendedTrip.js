import React, { useState } from "react";
import axios from "axios";

export default function CreateTrip() {
  const [input, setInput] = useState({
    title: "",
    content: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const newNote = {
      title: input.title,
      content: input.content,
      price: input.price,
    };
    axios
      .post("http://localhost:8000/api/tripRecRoutes/createtrip", newNote)
      .then(function (response) {
        if (response.data.msg === "success") {
          alert("data enter successfully.");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className="h-full w-full flex flex-col pt-24 items-center">
      <div className="h-52 w-1/2">
        <form className="h-full w-full flex flex-col justify-evenly">
          <div>
            <input
              className="h-10 w-full p-4 items-stretch"
              type="text"
              name="title"
              placeholder="Name of trip"
              autoComplete="off"
              value={input.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="h-10 p-4 w-full items-stretch"
              type="text"
              name="content"
              placeholder="Description"
              autoComplete="off"
              value={input.content}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="h-10 p-4 w-full items-stretch"
              type="number"
              name="price"
              placeholder="Price"
              autoComplete="off"
              value={input.price}
              onChange={handleChange}
            />
          </div>
          <div className="text-xl text-center">
            <button className="p-2" onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
