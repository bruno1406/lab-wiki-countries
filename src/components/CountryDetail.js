import React, { useEffect, useState } from 'react';
import countries from '../countries.json'; //Took the info from coutnires.jsonn
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  const [theCountry, setTheCountry] = useState({ borders: [] });

  useEffect(() => {
    let country = countries.find((eachCountry) => {
      return eachCountry.cca3 === props.match.params.cca3OfTheCountry;
    });
    console.log(country);
    setTheCountry(country);
  });

  const ShowBorders = () => {
    let borders = theCountry.borders.map((border) => {
      return countries.find((country) => {
        return country.cca3 === border;
      });
    });
    return borders.map((border) => {
      return (
        <Link to={`/country/${border.cca3}`}>
          <li>{border.name.common}</li>
        </Link>
      );
    });
    // return borders;
  };

  return (
    <div id="detail">
      <h1>{props.match.params.cca3OfTheCountry}</h1>
      <h4>{theCountry?.name?.common}</h4>
      <h4>{theCountry?.capital?.[0]}</h4>
      <h4>
        {theCountry?.area} km <sup>2</sup>
      </h4>
      <ShowBorders />
    </div>
  );
};

export default CountryDetail;
