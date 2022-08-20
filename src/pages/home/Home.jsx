import React from "react";
import "./home.css";
import Search from "../../components/search/Search";
import Books from "../../components/books/Books";
export default function Gutendex() {
  return (
    <div className="home">
      <Search />
      <Books />
    </div>
  );
}
