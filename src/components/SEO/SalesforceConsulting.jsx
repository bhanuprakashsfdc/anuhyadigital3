import React from 'react';
import { WEBSITE_NAME } from '../../constants/constants';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import cities from '../../data/cites';
import keywords from '../../data/webkeywords';
import { WEBSITE_EMAILTag, WEBSITE_PHONETag } from '../../constants/constants'

const SalesforceConsulting = () => {
    const shapeImages = [
        { src: 'assets/images/bg/Shape1.png' },
        { src: 'assets/images/bg/Shape2.png' },
        { src: 'assets/images/bg/Shape3.png' },
      ];
    return (
        <div>
            {cities.map((city) => {
                const formattedCity = city.toLowerCase().replace(/ /g, '-');
                const url = `/salesforce-consulting-company-${formattedCity}.html`;
                return (
                    <div key={city} className="city-service">
                        <Hero 
                            heading={`Transform Your Business in ${city}`}
                            subheading={`Your Reliable Digital <br /><span>Partner & Guide in ${city}</span>`}
                            description="Our dedicated team of experts is here to guide you through every step of your <br /> digital transformation journey, ensuring you make informed choices."
                            phoneLink={WEBSITE_PHONETag}
                            emailLink={WEBSITE_EMAILTag}
                            shapeImages={shapeImages}
                            />
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
