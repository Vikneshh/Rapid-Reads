// Fetches data from the  NewsApi
// Holds account for error states and Loading states
import { useState, useEffect } from "react";

const useFetchNews = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=20&apikey=4cb4254fde17510ab90379c1b8b93df3`;
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (err) {
        setError("Error occurred during API call");
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { articles, loading, error };
};

export default useFetchNews;
