import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'
import {
    Container,
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
  } from "shards-react";

const CountryDetail = (props) => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    },[]);
    const {flag, name, population, capital, region, subregion, alpha2Code, area} = country;

    return (
        <div className="country-detail">
            <Card  className="detail-card-style" style={{ maxWidth: "600px" }}>
                <CardHeader>Country Code : {alpha2Code}</CardHeader>
                <CardImg className="detail-flag" src={flag} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <p>Capital : {capital}</p>
                    <p>Population: {population}</p>
                    <p>Area : {area} Sq(km)</p>
                    <p>Region: {region}</p>
                    <p>Subregion: {subregion}</p>
                </CardBody>
                <CardFooter><a href="/"><Button>Go Back</Button></a></CardFooter>
            </Card>
        </div>
    );
};

export default CountryDetail;