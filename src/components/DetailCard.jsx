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

  return (
    <div id="details">
      {console.log(details.name.official)}
      {/* {console.log(details.name.common.official)} */}

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
            fill="#111517"
          />
        </svg>
        <Link to="/">
          <span>Back</span>
        </Link>
      </div>
      <div className="detail-card">
        <div className="detail-img">
          {/* <img src={details.flags.png} alt="" /> */}
        </div>
        <div className="detail-text">
          <h1></h1>
          <div className="details-text-p">
            <p>{/* <span> Native Name: {details.name.official}</span> */}</p>
            <p>{/* <span> Population: {details.official}</span> */}</p>
            <p>{/* <span> Region: {details.region}</span> */}</p>
            <p>{/* <span> Sub Region: {details.subregion}</span> */}</p>
            <p>
              <span> Capital: </span>
            </p>
            <p>
              <span> Top Level Domain: </span>
            </p>
            <p>
              <span> Currencies: </span>
            </p>
            <p>
              <span> Languages: </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
