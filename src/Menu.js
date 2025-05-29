
import React from "react";
import "./Menu.css";
import menuItems from "./menuData";

const Menu = () => {
  return (
    <section className="menu">
      <h2>Menu</h2>
      <div className="menu-grid">
        {menuItems.map((dish, index) => (
          <div key={index} className="menu-card">
            <img src={dish.image} alt={dish.name} className="menu-img" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span className="price">{dish.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
