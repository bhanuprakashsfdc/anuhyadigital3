import React from 'react';
import { WEBSITE_NAME } from '../../constants/constants';
import { FaGlobe, FaCogs, FaLandmark, FaBuilding, FaCode, FaBlogger, FaShopify, FaProjectDiagram, FaTools, FaWordpress, FaRegCreditCard, FaAws, FaGlobeAmericas, FaServer, FaEnvelope, FaRedo, FaCertificate } from 'react-icons/fa';
import './ServicesList.css';

const services = [
  { name: "Static Website", icon: <FaGlobe color="#5D46FD" /> },
  { name: "Dynamic Website", icon: <FaCogs color="#FE6F3D" /> },
  { name: "Landing Website", icon: <FaLandmark color="#5D46FD" /> },
  { name: "Corporate Website", icon: <FaBuilding color="#FE6F3D" /> },
  { name: "Customized Website", icon: <FaCode color="#5D46FD" /> },
  { name: "Blogging Website", icon: <FaBlogger color="#FE6F3D" /> },
  { name: "Shopify website development", icon: <FaShopify color="#5D46FD" /> },
  { name: "Portal Development", icon: <FaProjectDiagram color="#FE6F3D" /> },
  { name: "Website Maintenance", icon: <FaTools color="#5D46FD" /> },
  { name: "WordPress Website Development", icon: <FaWordpress color="#FE6F3D" /> },
  { name: "WooCommerce", icon: <FaRegCreditCard color="#5D46FD" /> },
  { name: "AWS Management", icon: <FaAws color="#FE6F3D" /> },
  { name: "Domain", icon: <FaGlobeAmericas color="#5D46FD" /> },
  { name: "Hosting", icon: <FaServer color="#FE6F3D" /> },
  { name: "Email for business purposes", icon: <FaEnvelope color="#5D46FD" /> },
  { name: "Website Renewal", icon: <FaRedo color="#FE6F3D" /> },
  { name: "SSL Certificate", icon: <FaCertificate color="#5D46FD" /> },
];

const ServicesList = ({ city }) => {
  return (
    <div className="services-list">
      <h2>List of Services {WEBSITE_NAME} Provides in {city}</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesList;
