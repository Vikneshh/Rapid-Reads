// Responsible for showing individual card components with news,descriptoion,url,images and much more
// Also carries a Add to favourite functionality
// Persist favourites in the local storage
import React, { useState, useEffect } from "react";
import { defaultImage } from "../utils/defaultImage";

const NewsItem = ({ title, description, src, url, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favoriteItems.includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  const handleFavoriteClick = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const newFavorites = favoriteItems.filter((item) => item !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favoriteItems.push(id);
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
      setIsFavorite(true);
    }
  };

  return (
    <div
      className="card bg-dark-subtle text-dark m-3 p-3 d-inline-block"
      style={{ maxWidth: "315px" }}
    >
      <img
        className="card-img-top"
        src={src ? src : defaultImage}
        alt="Card"
        style={{ width: "280px", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title && title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "It is a current event happened to know more about them tap on Read More "}
        </p>
        <a href={url} className="btn btn-primary">
          Read More...
        </a>
        <button
          className={`btn ${isFavorite ? "btn-success" : "btn-warning "} mt-2 `}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "Added as favourite" : "Add to Favorite ⭐"}
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
