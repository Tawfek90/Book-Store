import React from "react";
import "./singlebook.css";
import { Link } from "react-router-dom";

export default function Singlebook({ ...item }) {
  let { id, title, formats } = item;
  const vals = Object.values(formats);
  const keys = Object.keys(formats);
  let image = "";
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "image/jpeg") {
      image = vals[i];
    }
  }
  if (title.length > 20) {
    title = title.slice(0, 20);
  }
  return (
    <div className="singleBook">
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="title">{title}</div>
      <div className="details">
        <Link to={`/details/${id}`}>details</Link>
      </div>
    </div>
  );
}
