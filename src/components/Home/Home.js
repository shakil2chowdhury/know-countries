import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
         .then(res => res.json())
         .then(data => setCountries(data));
    },[]);
    console.log(countries);
    return (
        <div className="parentDiv">
            <div className="header">
                <h1>Know About Countries</h1>
            </div>
            <div className="home container mt-5 row row-cols-md-4">
            {
                countries.map(country => <div className="col"><Country country={country} key={country.alpha3Code} /></div>)
            }
            </div>
        </div>

    );
};

export default Home;