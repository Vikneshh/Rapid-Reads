// Used to Search news with their description and title
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetchNews from "../utils/hooks/useFetchNews";
import NewsItem from "./NewsItem";

const SearchBox = () => {
  const category = useSelector((state) => state.category);

  const { articles } = useFetchNews(category);
  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleClick = () => {
    if (!articles) return;

    const filtered = articles.filter(
      (item) =>
        (item.title &&
          item.title.toLowerCase().includes(search.toLowerCase())) ||
        (item.description &&
          item.description.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredArticles(filtered);
    setSearchClicked(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.key)
      handleClick();
    }
  }

  useEffect(() => {
    if (search === "") {
      setFilteredArticles([]);
      setSearchClicked(false);
    }
  }, [search]);

  return (
    <div className="search">
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control border-0 searchInput"
          placeholder="Search News"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <div className="input-group-append">
          <button
            className="btn btn-danger border-start-0 border-top-0"
            type="button"
            onClick={handleClick}
            
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-3">
        {searchClicked && filteredArticles.length === 0 && (
          <p className="text-dark bg-white text-center p-1 w-50 mx-auto rounded-4">
            No articles found.
          </p>
        )}

        {filteredArticles.length > 0 &&
          filteredArticles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
              id={news.url}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchBox;
