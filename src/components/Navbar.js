// Responsible for navigating to different sections and news in the webpage by manipulating the endpoint category
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useDispatch } from "react-redux";
import { setCategory } from "../app/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    setActiveCategory(category);
  };

  useEffect(() => {
    if (activeCategory !== "") {
      window.scrollTo(0, 300);
    }
    return () => {
      setActiveCategory("");
    };
  }, [activeCategory]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-5">Rapid Reads</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-sm-flex justify-content-center align-items-center bg-gradient m-lg-4 m-3">
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "technology" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("technology")}
                style={{ cursor: "pointer" }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "business" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("business")}
                style={{ cursor: "pointer" }}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "health" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("health")}
                style={{ cursor: "pointer" }}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "science" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("science")}
                style={{ cursor: "pointer" }}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "sports" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("sports")}
                style={{ cursor: "pointer" }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  activeCategory === "entertainment" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("entertainment")}
                style={{ cursor: "pointer" }}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
