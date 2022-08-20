import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { useGlobalContext } from "../context/Context";
import Loading from "../loading/Loading";

export default function Details() {
  //destrucuring the state values
  const { fetchDetailsData, detailsData, loading } = useGlobalContext();
  //getting id by useParams
  const { id } = useParams();
  //calling fetchDetailsData to fetch data by the id
  useEffect(() => {
    fetchDetailsData(id);
  }, [id]);

  const { title, authors, subjects, bookshelves, formats, download_count } =
    detailsData;
  //getting data from the wiered format object
  let image = "";
  let ReadingLink = "";
  let DownloadLink = "";
  if (formats) {
    const vals = Object.values(formats);
    const keys = Object.keys(formats);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "image/jpeg") {
        image = vals[i];
      } else if (keys[i] === "text/html") {
        ReadingLink = vals[i];
      } else if (keys[i] === "application/zip") {
        DownloadLink = vals[i];
      }
    }
  }
  //conditional Rendering
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="details">
      <div className="details-container">
        <div className="title">{title}</div>

        <div className="gridContainer">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="information">
            <div className="subjects">
              <h3>books subjects</h3>
              {subjects &&
                subjects.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
            </div>
            <div className="authors">
              <h4>authors</h4>
              <div className="authorsInformation">
                <p className="authorname">
                  name: <span>{authors && authors[0].name} </span>
                </p>
                <p className="birth">
                  birth year: <span>{authors && authors[0].birth_year} </span>
                </p>
                <p className="death">
                  death year: <span>{authors && authors[0].death_year} </span>
                </p>
              </div>
            </div>
            <div className="bookshelves">
              <h2>book shelves</h2>
              <div className="bookshelves-information">
                {bookshelves && bookshelves.length === 0 && (
                  <p>oops! no book shelves</p>
                )}
                {bookshelves &&
                  bookshelves.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
              </div>
            </div>
            <div className="downloadCount">
              <h4>download Count</h4>
              <p>{download_count}</p>
            </div>
            <div className="readBook">
              <a href={ReadingLink} target="_blank">
                read book
              </a>
            </div>
            <div className="downloadBook">
              <a href={DownloadLink}>download book</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
