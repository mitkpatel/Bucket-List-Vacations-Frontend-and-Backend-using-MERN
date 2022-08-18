import React, { useState, useEffect } from "react";
import "./trips.css";

const Menu = ({ items }) => {
  const [trips, setTrips] = useState([
    {
      title: "",
      content: "",
      price: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/api/tripRecRoutes/gettrips")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTrips(jsonRes));
  });

  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
      {trips.map((trips) => (
        <article className="menu-item">
          <div className="item-info">
            <header>
              <h4>{trips.title}</h4>
              <h4 className="price">${trips.price}</h4>
            </header>
            <p className="item-text">{trips.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;