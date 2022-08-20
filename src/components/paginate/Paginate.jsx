import React, { useRef } from "react";
import "./paginate.css";
import { useGlobalContext } from "../context/Context";

export default function Paginate() {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const { changePageNumber } = useGlobalContext();

  return (
    <div className="paginate">
      <div className="paginate-container">
        {numbers.map((item, index) => {
          return (
            <div
              key={index}
              className="number"
              //sending pageNumber to fetch data acoording to it
              onClick={(e) => {
                changePageNumber(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
