import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country name:{props.name}</h2>
            <h3>population: {props.population}</h3>
            <img src={props.img.png} alt="" />
        </div>
    );
};

export default Country;