import React, { useState } from 'react';
import { WEBSITE_NAME } from '../../constants/constants';
import { FaReact, FaHtml5, FaCss3Alt, FaWordpress, FaDrupal, FaJoomla, FaDatabase, FaLaravel, FaFire, FaAngular, FaNodeJs, FaShopify, FaMagento, FaAws,FaBootstrap } from 'react-icons/fa';
import { SiJquery, SiWoocommerce, SiMariadb, SiOracle, SiSqlite } from 'react-icons/si';
import './Technologies.css';

const technologies = {
  FrontEnd: [
    { name: 'Angular.JS', icon: <FaAngular color="#DD0031" /> },
    { name: 'React JS', icon: <FaReact color="#61DBFB" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34C26" /> },
    { name: 'CSS 3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Jquery', icon: <SiJquery color="#0769AD" /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#563D7C" /> },
    { name: 'Node.JS', icon: <FaNodeJs color="#339933" /> }
  ],
  CMS: [
    { name: 'Shopify', icon: <FaShopify color="#95BF47" /> },
    { name: 'Magento', icon: <FaMagento color="#F46B1C" /> },
    { name: 'WordPress', icon: <FaWordpress color="#21759B" /> },
    { name: 'Woo Commerce', icon: <SiWoocommerce color="#96588A" /> },
    { name: 'Drupal', icon: <FaDrupal color="#0077C0" /> },
    { name: 'Joomla', icon: <FaJoomla color="#5091CD" /> }
  ],
  Database: [
    { name: 'MariaDB', icon: <SiMariadb color="#003545" /> },
    { name: 'MongoDB', icon: <FaDatabase color="#47A248" /> },
    { name: 'MySQL', icon: <FaDatabase color="#4479A1" /> },
    { name: 'Oracle', icon: <SiOracle color="#F80000" /> },
    { name: 'Sqlite', icon: <SiSqlite color="#003B57" /> },
    { name: 'AWS-RDS', icon: <FaAws color="#FF9900" /> }
  ],
  Framework: [
    { name: 'Laravel', icon: <FaLaravel color="#FF2D20" /> },
    { name: 'CodeIgniter', icon: <FaFire color="#F03C02" /> }
  ]
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('FrontEnd');

  return (
    <div className="technologies">
      <h2>Technologies we work with</h2>
      <p>
         {WEBSITE_NAME} provides expert services in website development that specialize in cutting-edge and adaptable format techniques with <strong>Node JS, Laravel frameworks, Bootstrap, HTML5, Shopify, JQUERY, AJAX, Magento, and JavaScript.</strong> Our complete-stack backend professionals are gifted in PHP, Python, and Node.js and enhance functionality using MySQL and MongoDB. Additionally, we offer the most suitable Content Management System (CMS) options, consisting of Drupal, WordPress and Joomla.
      </p>
      <div className="tabs">
        <button onClick={() => setActiveTab('FrontEnd')} className={activeTab === 'FrontEnd' ? 'active' : ''}>Front End</button>
        <button onClick={() => setActiveTab('CMS')} className={activeTab === 'CMS' ? 'active' : ''}>CMS</button>
        <button onClick={() => setActiveTab('Database')} className={activeTab === 'Database' ? 'active' : ''}>Database</button>
        <button onClick={() => setActiveTab('Framework')} className={activeTab === 'Framework' ? 'active' : ''}>Framework</button>
      </div>
      <div className="technology-grid">
        {technologies[activeTab].map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon">{tech.icon}</div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
