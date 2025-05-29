import React from "react";
import food1 from "../../assets/food1.jpg";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
  return (
    <header className="hero">
      <section className="hero-content">
        <div className="hero-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="Reserve Table" className="hero-button">
              Reserve Table
            </button>
          </Link>
        </div>
        <div className="hero-img-wrapper">
          <img
            src={food1}
            alt="Delicious Mediterranean dish"
            className="hero-img"
          />
        </div>
      </section>
    </header>
  );
};

export default Home;
