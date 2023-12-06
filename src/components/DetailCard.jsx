import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailCard() {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, []);
  const getCurrencyInfo = () => {
    const currencyInfo = [];

    for (const code in details.currencies) {
      if (details.currencies.hasOwnProperty(code)) {
        currencyInfo.push(details.currencies[code]);
      }
    }

    return currencyInfo;
  };
  const getLanguageNames = () => {
    const languageNames = [];

    for (const code in details.languages) {
      if (details.languages.hasOwnProperty(code)) {
        languageNames.push(details.languages[code]);
      }
    }

    return languageNames;
  };
  return (
    <div id="details">
      <div className="back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
          />
        </svg>
        <Link to="/" className="back-link">
          <span>Back</span>
        </Link>
      </div>
      <div className="detail-card">
        <div className="detail-img">
          <img src={details.flags?.png} alt="" />
        </div>
        <div className="detail-text">
          <h1> {details.name?.common}</h1>
          <div className="details-text-p">
            <p>
              <span> Native Name: </span>
              {details.name?.official}
            </p>
            <p>
              <span> Population: </span>
              {details.population}
            </p>
            <p>
              <span> Region: </span>
              {details.region}
            </p>
            <p>
              <span> Sub Region: </span>
              {details.subregion}
            </p>
            <p>
              <span> Capital: </span>
              {details.capital}
            </p>
            <p>
              <span> Top Level Domain: </span>
              {details.tld}
            </p>
            <p style={{ display: "flex", margin: "0" }}>
              <span style={{ margin: "0" }}> Currencies: </span>
              {getCurrencyInfo().map((currency) => (
                <p style={{ margin: "0" }}>{currency.name}</p>
              ))}
            </p>
            <p style={{ display: "flex", margin: "0" }}>
              <span style={{ margin: "0" }}> Languages: </span>
              {getLanguageNames().map((languageName) => (
                <p style={{ margin: "0" }}>{languageName}</p>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
