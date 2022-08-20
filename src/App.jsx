import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import BookDetails from "./pages/bookDetails/BookDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
