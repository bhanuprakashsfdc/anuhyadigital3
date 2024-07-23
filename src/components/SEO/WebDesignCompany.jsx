import React from 'react'
import { WEBSITE_NAME } from '../../constants/constants';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import ProjectSection from '../ProjectSection';
import WorkingProcessSection from '../WorkingProcessSection';
import ClientSection from '../ClientSection/ClientSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import ServicesList from '../ServicesList/ServicesList';
import Blogs from '../Blogs';
import VitalIngredients from '../VitalIngredients/VitalIngredients';
import Technologies from '../Technologies/Technologies';

const WebDesignCompany = ({ city }) => {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    const url = `/web-design-company-${formattedCity}.html`;
    return (
        <div className="city-service">
          <Hero />
          <div className="contect common_heading text-center row gy-4">
            
            <h1>Welcome to { WEBSITE_NAME }, the leading web design company in {city}</h1>
            <p>At { WEBSITE_NAME }, we are dedicated to providing top-notch web design services in {city}. Our team of experienced designers and developers are passionate about creating beautiful, functional, and user-friendly websites that help businesses succeed online.</p>
            <p>With years of experience in the industry, we understand the unique needs of businesses in {city} and tailor our services to meet those needs. Whether you are a small local business or a large corporation, we have the skills and expertise to deliver a website that exceeds your expectations.</p>
            <p>We take a human-centered approach to web design, working closely with our clients to understand their goals and challenges. Our process begins with a thorough discovery phase, where we gather information about your business, target audience, and competitors. This allows us to create a strategy that aligns with your objectives and sets the foundation for a successful project.</p>
            <p>Next, our design team creates wireframes and prototypes to visualize the structure and layout of your website. We collaborate with you to refine these designs, ensuring they meet your needs and preferences. Once the design is approved, our development team brings it to life, building a fully functional website that is both beautiful and powerful.</p>
            <p>Throughout the project, we maintain open communication with you, providing regular updates and seeking your feedback. We believe in building long-term relationships with our clients, offering ongoing support and maintenance to ensure your website continues to evolve and grow with your business.</p>
            <p>If you're looking for a web design company in {city} that is committed to delivering exceptional results, look no further than { WEBSITE_NAME }. Contact us today to learn more about our services and how we can help you achieve your online goals.</p>
            <Link to={url}>Learn more about our services in {city}</Link>

            <h2>{ WEBSITE_NAME }: Professional Web Design Company in {city}</h2>
      <p>Get a Professional Web Designing Service in {city}</p>
      <p>{ WEBSITE_NAME }, We are a team of web designing experts committed to providing innovative and results-driven web-based solutions employing cutting-edge trends and technology. We are a top-rated designing agency that specializes in innovative and results-oriented solutions. Allow our web design services to bring your firm front and centre, whether it's to raise earnings, give support, sell items, or market your brand. Our web design company in {city} has a demonstrated track record of what it takes to build a successful website. When it comes to creating creative and imaginative online business models, brand-friendly websites, effective direct response methods, and inventive marketing strategies that generate hyper-growth for our customers, our firm shines. With years of experience as a professional web design firm, we have had the opportunity to work with a wide range of firms in a variety of sectors.</p>

      <h3>Vision</h3>
      <p>The vision of { WEBSITE_NAME } is 'Website for Everyone' which means that from India to the US, any individual, rich or poor, irrespective of their background, business & class should have a website.</p>

      <h3>Services offered at { WEBSITE_NAME } {city}</h3>
      <p>{ WEBSITE_NAME } is a famous website improvement agency whose mission is to offer international exceptional website design and improvement services at aggressive prices. We have a fixed of web builders, designers, and assignment managers who consist of their creative thinking into enterprise website design to create an overall performance-oriented company website online for a sturdy online identity inside the modern-day technology of digitalization. The most crucial aspect of your project is the content. Of course, our employees would be delighted to give your message a voice. We may write for the entire project, a single page, or provide your team with the knowledge they need to develop tailored content. Once you've decided on the message you want to convey, let our research and experience show you how. { WEBSITE_NAME } has knowledge in website design, web improvement, CMS development, online advertising and marketing, e-commerce websites, and brand design. { WEBSITE_NAME } has a group of professional experts who include their creative thinking into company net design to create an overall performance-orientated corporate website for a robust online identity.</p>

            </div>
            <ServicesList city={city} />
            <VitalIngredients city={city}/>
            <Technologies />
            <ProjectSection />
            <WorkingProcessSection />
            <ClientSection />
            <TestimonialsSection />
            <Blogs />
        </div>
    );
}
/*
import { useParams } from 'react-router-dom';
    const WebDesignCompany = ({ city, keyword }) => {
    const { citySlug, keywordSlug } = useParams();

    return (
      <div>
        <h1>{keyword} in {city}</h1>
        <p>Welcome to our {keyword} services in {city}. We provide top-notch web design solutions to help your business thrive online.</p>
        
      </div>
    );
  };

*/
export default WebDesignCompany;
