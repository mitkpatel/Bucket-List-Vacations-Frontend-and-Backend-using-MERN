import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from '../data/data'
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Recommended() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Recommended Places</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}