import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

function Cards() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  let id = uuidv4();
  return (
    <div id="home">
      <div className="input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#848484"
          />
        </svg>
        <input type="text" placeholder="Search for a country…" />
      </div>
      <div className="cards">
        {countries.map((x) => {
          return (
            <Link to={"/details/name/" + x.name.common}>
              <Card
                keys={id}
                title={x.name.common}
                img={x.flags.png}
                population={x.population}
                region={x.region}
                capital={x.capital}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
