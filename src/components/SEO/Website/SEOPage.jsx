import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WEBSITE_NAME, WEBSITE_EMAILTag, WEBSITE_PHONETag } from '../../../constants/constants';
import Hero from '../../Hero';
import ProjectSection from '../../ProjectSection';
import WorkingProcessSection from '../../WorkingProcessSection';
import ClientSection from '../../ClientSection/ClientSection';
import TestimonialsSection from '../../TestimonialsSection/TestimonialsSection';
import ServicesList from '../../ServicesList/ServicesList';
import Blogs from '../../Blogs';
import VitalIngredients from '../../VitalIngredients/VitalIngredients';
import Technologies from '../../Technologies/Technologies';
import IndustriesWeWorkFor from '../../IndustriesWeWorkFor/IndustriesWeWorkFor';
import CreativeWebDesignFeatures from '../../CreativeWebDesignFeatures/CreativeWebDesignFeatures';

const SEOPage = ({ city, type }) => {
  const location = useLocation();
  const keyword = location.pathname
  .split('/')[1]
  .replace(/-/g, ' ')
  .replace('.html', '');

  useEffect(() => {
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloaded');
    }
  }, []);

  const shapeImages = [
    { src: 'assets/images/bg/Shape1.png' },
    { src: 'assets/images/bg/Shape2.png' },
    { src: 'assets/images/bg/Shape3.png' },
  ];

  const formattedCity = city.toLowerCase().replace(/ /g, '-');
  const url = `/${type}-${formattedCity}.html`;

  return (
    <div className="city-service">
      <Hero
        heading={`${keyword} in ${city}`}
        subheading={`Your Reliable Digital <br /><span>Partner & Guide in ${city}</span>`}
        description="Our dedicated team of experts is here to guide you through every step of your <br /> digital transformation journey, ensuring you make informed choices."
        phoneLink={WEBSITE_PHONETag}
        emailLink={WEBSITE_EMAILTag}
        shapeImages={shapeImages}
      />
      <div className="content common_heading text-center row gy-4">
        <h1>Welcome to {WEBSITE_NAME}, the leading {keyword}</h1>
        <p>At {WEBSITE_NAME}, we are dedicated to providing top-notch {keyword} in {city}. Our team of experienced designers and developers are passionate about creating beautiful, functional, and user-friendly websites that help businesses succeed online.</p>
        <p>With years of experience in the industry, we understand the unique needs of businesses in {city} and tailor our services to meet those needs. Whether you are a small local business or a large corporation, we have the skills and expertise to deliver a website that exceeds your expectations.</p>
        <p>We take a human-centered approach to {keyword}, working closely with our clients to understand their goals and challenges. Our process begins with a thorough discovery phase, where we gather information about your business, target audience, and competitors. This allows us to create a strategy that aligns with your objectives and sets the foundation for a successful project.</p>
        <p>Next, our design team creates wireframes and prototypes to visualize the structure and layout of your website. We collaborate with you to refine these designs, ensuring they meet your needs and preferences. Once the design is approved, our development team brings it to life, building a fully functional website that is both beautiful and powerful.</p>
        <p>Throughout the project, we maintain open communication with you, providing regular updates and seeking your feedback. We believe in building long-term relationships with our clients, offering ongoing support and maintenance to ensure your website continues to evolve and grow with your business.</p>
        <p>If you're looking for {keyword} in {city} that is committed to delivering exceptional results, look no further than {WEBSITE_NAME}. Contact us today to learn more about our services and how we can help you achieve your online goals.</p>
        <a href={url}>Learn more about our services in {city}</a>
      </div>
      <ServicesList city={city} />
      <VitalIngredients city={city}/>
      <Technologies />
      <IndustriesWeWorkFor />
      <CreativeWebDesignFeatures />
      <ProjectSection />
      <WorkingProcessSection />
      <ClientSection />
      <TestimonialsSection />
      <Blogs />
    </div>
  );
};

export default SEOPage;
