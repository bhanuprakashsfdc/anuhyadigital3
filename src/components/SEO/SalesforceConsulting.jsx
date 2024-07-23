import React from 'react';
import { WEBSITE_NAME } from '../../constants/constants';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import cities from '../../data/cites';
import keywords from '../../data/webkeywords';

const SalesforceConsulting = () => {
    return (
        <div>
            {cities.map((city) => {
                const formattedCity = city.toLowerCase().replace(/ /g, '-');
                const url = `/salesforce-consulting-company-${formattedCity}.html`;
                return (
                    <div key={city} className="city-service">
                        <Hero />
                        <h2>Welcome to { WEBSITE_NAME } Consulting Company in {city}</h2>
                        <p>Welcome to Aditya Sri Cargo Best Packers and Movers in {city}</p>
                        <Link to={url}>Learn more about our services in {city}</Link>
                    </div>
                );
            })}
            {keywords.map((keyword, index) => (
                <meta key={index} name="keywords" content={keyword} />
            ))}
        </div>
    );
}

export default SalesforceConsulting;
