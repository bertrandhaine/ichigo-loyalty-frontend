import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Ichigo Loyalty Frontend</h1>
      <p className="home-subtitle">Here are the available routes:</p>
      <ul className="home-list">
        <li className="home-list-item">
          <Link to="/customer/:id/tier" className="home-link">
            Customer Tier Page
          </Link>
          <span className="home-description">
            {" "}
            - Replace :id with the customer ID
          </span>
        </li>
        <li className="home-list-item">
          <Link to="/customer/:id/order-history" className="home-link">
            Order History
          </Link>
          <span className="home-description">
            {" "}
            - Replace :id with the customer ID
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
