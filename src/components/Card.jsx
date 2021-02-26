import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={data.flag} alt="countryFlag" />
      </div>
      <ul className="ul-card-data">
        <li className="li-card-data li-name">{data.name}</li>
        <li className="li-card-data">Region: {data.region}</li>
        <li className="li-card-data">Subregion: {data.subregion}</li>
      </ul>
    </div>
  );
};

export default Card;
