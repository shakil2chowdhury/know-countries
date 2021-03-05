import React from 'react';
import { Alert } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./Country.css"
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
import { Router, Link, useHistory } from 'react-router-dom';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = (props) => {
    const history = useHistory();
    const {flag, name, capital} = props.country;
    const getDetails = (country) => {
        history.push(`/country/${name}`);
    }
    return (
        <Card className="card-style" style={{ maxWidth: "400px" }}>
            <CardImg src={flag} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <p><b>Capital: </b>{capital}</p>
                <Button onClick={() => getDetails(props.country)}>Get Details</Button>
            </CardBody>
        </Card>
    );
};

export default Country;