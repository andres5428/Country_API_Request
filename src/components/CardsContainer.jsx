/**
 * Imports
 */

import React from "react";
import instance from "../axios/axios";
import { useState, useEffect } from "react";
import Card from "./Card";


/**
 * @method CardsContainer
 * @description Request the data from API, stablish the state and returns the card container
 */

const CardsContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance.get("/").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="main-container">
      <h1 className="main-title">Paises</h1>
      <div className="card-container">
        {data.slice(1, 17).map((country) => (
          <Card data={country} key={country.numericCode} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
