import React from "react";
import DetailCard from "./DetailCard";

function Card({ title, img, population, region, capital, keys }) {
  return (
    <>
      {/* <DetailCard idd={keys} /> */}
      <div className="card" key={keys}>
        <img src={img} alt="" />
        <div className="card-text">
          <p className="title">{title}</p>
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
