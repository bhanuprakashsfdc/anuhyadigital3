import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloud,
    faCode,
    faSearchDollar,
    faUsers,
    faMobileAlt,
    faShoppingCart,
    faFileAlt,
    faDigitalTachograph
} from '@fortawesome/free-solid-svg-icons';
import ServiceIcon from '../assets/images/icon/service-icon1.svg';

const Services = () => {
    return (
        <section className="service_section">
            <div className="col-md-8 m-auto">
                <div className="common_heading text-center">
                    <div className="title_style">
                        <span></span><h3>Our Best Services</h3>
                    </div>
                    <h2> Our Commitment to Excellent Service <br/> <span> Is A Source Of Pride </span> </h2>
                </div>
            </div>
            <div className="row service-slider serslid">
                <ServiceItem
                    image={faCloud}
                    icon={faCloud} // Salesforce Consulting
                    title="Salesforce Consulting"
                    description="Enhance your business processes with our expert Salesforce consulting services."
                />
                <ServiceItem
                    image={ServiceIcon}
                    icon={faCode} // Web Development
                    title="Web Development"
                    description="Create stunning websites and web applications tailored to your business needs."
                />
                <ServiceItem
                    image={ServiceIcon}
                    icon={faSearchDollar} // SEO Services
                    title="SEO Services"
                    description="Improve your online visibility and attract more organic traffic to your website."
                />
                <ServiceItem
                    image={ServiceIcon}
                    icon={faUsers} // Social Media Marketing
                    title="Social Media Marketing"
                    description="Engage your audience and grow your brand presence with strategic SMM services."
                />
                <ServiceItem
                    image={ServiceIcon}
                    icon={faMobileAlt} // Mobile App Development
                    title="Mobile App Development"
                    description="Build intuitive mobile apps that drive customer engagement and business growth."
                />
                <ServiceItem
                    image={ServiceIcon}
                    icon={faShoppingCart} // E-commerce Solutions
                    title="E-commerce Solutions"
                    description="Launch and optimize your online store with our scalable e-commerce solutions."
                />
                <ServiceItem
                    image={ServiceIcon}
                    icon={faFileAlt} // Content Marketing
                    title="Content Marketing"
                    description="Create compelling content that resonates with your target audience and drives conversions."
                />
                <ServiceItem
                    image={ServiceIcon}
                    icon={faDigitalTachograph} // Digital Strategy Consulting
                    title="Digital Strategy Consulting"
                    description="Develop a robust digital strategy to achieve your business goals effectively."
                />
            </div>
        </section>
    );
}

const ServiceItem = ({ image, icon, title, description }) => {
    return (
        <div className="service_slider service_carousel owl-carousel serslidwidth">
            <div className="service_item p-0 text-center">
                <div className="service-top">
                  <FontAwesomeIcon icon={icon} className="img-fluid sizeic" alt={title} />
                    <div className="service_middle_icon">
                      <FontAwesomeIcon icon={icon} className="img-fluid" alt={title} />
                        <span></span>
                    </div>
                </div>
                <div className="bottom">
                    <h4>{title}</h4>
                    <span></span>
                    <p>{description}</p>
                    <a href="#details">Learn More <i className="ensurx-plus"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Services;
