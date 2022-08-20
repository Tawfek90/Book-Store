import React from "react";
import "./books.css";
import { useGlobalContext } from "../context/Context";
import Singlebook from "../singleBook/Singlebook";
import Paginate from "../paginate/Paginate";
import Loading from "../loading/Loading";

export default function Books() {
  const { books, loading } = useGlobalContext();
  //check loading condition first
  if (loading) {
    return <Loading />;
  }
  //if not we render the books components
  if (books.length === 0) {
    return <h2 className="oops">oops!no books matches your search criteria</h2>;
  }
  return (
    <div className="books">
      <div className="books-container">
        {books &&
          books.map((item, index) => {
            return <Singlebook key={index} {...item} />;
          })}
      </div>
      <Paginate />
    </div>
  );
}
