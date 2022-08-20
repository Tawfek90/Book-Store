import React, { useEffect, useRef } from "react";
import "./search.css";
import { useGlobalContext } from "../context/Context";
export default function Search() {
  const { fetchSearchData, books } = useGlobalContext();
  const sign = useRef("");
  useEffect(() => {
    sign.current.focus();
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    fetchSearchData(sign.current.value);
    sign.current.value = null;
  };

  return (
    <div className="search">
      <div className="search-container">
        <form action="" className="inputForm" onSubmit={submitHandler}>
          <label htmlFor="book">search for your favourite book</label>
          <input type="text" id="book" ref={sign} />
        </form>
      </div>
    </div>
  );
}
