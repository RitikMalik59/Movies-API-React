import React from "react";

const Card = ({ movie }) => {
  // console.log("card: " + movie.title);
  // console.log("card: " + movie);
  const { title, posterURL, imdbId } = movie;

  // console.log(title);
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <img
          src={
            posterURL ||
            "https://c8.alamy.com/comp/2ACA4KA/black-film-shadow-2ACA4KA.jpg"
          }
          className="card-img-top"
          alt={posterURL}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {/* {plot ? plot.slice(0, 100) + "..." : "No description available."} */}{" "}
            desc
          </p>
          <a href={"https://www.imdb.com/title/" + imdbId} target="_blank">
            <small className="text-muted">imdbId : {imdbId}</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
