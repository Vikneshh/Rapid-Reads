// Responsible for entire main content
// Shows whole Box component in the webpage
// Integrated pagination component too for navigating to different news of pages
import { useState } from "react";
import Paginate from "./Paginate";
import NewsItem from "./NewsItem";
import useFetchNews from "../utils/hooks/useFetchNews";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const NewsBoard = () => {
  const category = useSelector((state) => state.category);
  const { articles, loading, error } = useFetchNews(category);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = articles ? articles.slice(indexOfFirstPost, indexOfLastPost):[];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mainContent p-4">
      <h2 className="text-center m-4 text-white">
        Latest <span className="">News</span>
      </h2>
      {currentPosts.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.image}
          url={news.url}
          id={news.url}
        />
      ))}
      <Paginate
        postPerPage={postPerPage}
        totalPosts={articles?articles.length:0}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default NewsBoard;
