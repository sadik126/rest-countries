import React, { useEffect, useState } from 'react';
import Country from '../singlecountry/Country';
import '../singlecountry/Country.css';

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello country{countries.length}</h1>

            <div className='container'>
            {
                countries.map(country => <Country name = {country.name.common}
                                                 population = {country.population}
                                                 img = {country.flags}></Country>)
            }
            </div>
         
        </div>
    );
};

export default Countries;