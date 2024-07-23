import React from 'react';
import { FaMobileAlt, FaTachometerAlt, FaSearch, FaArrowsAlt, FaServer, FaTools, FaBolt, FaCode, FaUserCheck, FaLock, FaCheckCircle, FaLaptopCode, FaChartLine, FaPaintBrush, FaFont, FaShareAlt } from 'react-icons/fa';
import './VitalIngredients.css';

const ingredients = [
  { name: 'Responsive', description: 'Ensures the website adapts to different devices for a consistent user experience.', icon: <FaMobileAlt color="#5D46FD" /> },
  { name: 'Loading Time', description: 'Duration for webpage to fully display content after user request.', icon: <FaTachometerAlt color="#FE6F3D" /> },
  { name: 'SEO friendly', description: 'Optimizes website for better visibility and ranking in search results.', icon: <FaSearch color="#5D46FD" /> },
  { name: 'Proper Navigation', description: 'Facilitates seamless movement across the website for user convenience.', icon: <FaArrowsAlt color="#FE6F3D" /> },
  { name: 'GT Matrix', description: 'Analyzes website speed and offers improvement suggestions.', icon: <FaServer color="#5D46FD" /> },
  { name: 'Google Speed test', description: 'Assesses website performance and suggests speed enhancements.', icon: <FaBolt color="#FE6F3D" /> },
  { name: 'Clean Designing', description: 'Emphasises simplicity and clarity in web design for a better user experience.', icon: <FaPaintBrush color="#5D46FD" /> },
  { name: 'Functionality', description: 'Ensures smooth user interaction and operational features on the website.', icon: <FaTools color="#FE6F3D" /> },
  { name: 'Usability', description: 'Measures ease of user navigation and interaction on website or app.', icon: <FaUserCheck color="#5D46FD" /> },
  { name: 'Call to Action', description: 'Prompts users to take specific actions on website.', icon: <FaCheckCircle color="#FE6F3D" /> },
  { name: 'Compatibility with Multibrowser', description: 'Ensures the website functions well across different web browsers.', icon: <FaCode color="#5D46FD" /> },
  { name: 'Social Media Linking', description: 'Integrates social media platforms for an expanded online presence.', icon: <FaShareAlt color="#FE6F3D" /> },
  { name: 'Secured Https', description: 'Enhances website security and safeguards user data with HTTPS protocol.', icon: <FaLock color="#5D46FD" /> },
  { name: 'Consol Verification', description: 'Validates website ownership for credibility.', icon: <FaCheckCircle color="#FE6F3D" /> },
  { name: 'Google Analysis', description: 'Tracks and analyses website traffic and user behaviour.', icon: <FaChartLine color="#5D46FD" /> },
  { name: 'Original Content', description: 'Provides unique and valuable content to engage visitors.', icon: <FaLaptopCode color="#FE6F3D" /> },
  { name: 'Online Fonts', description: 'Enhances website aesthetics with diverse online font options.', icon: <FaFont color="#5D46FD" /> },
  { name: 'Color Scheme', description: 'Creates a cohesive colour palette reflecting brand identity and evoking desired emotions.', icon: <FaPaintBrush color="#FE6F3D" /> }
];

const VitalIngredients = ({ city }) => {
  return (
    <div className="vital-ingredients">
      <h2>Vital Ingredients for Geo-Specific Impact in {city}</h2>
      <div className="ingredients-grid">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-item">
            <div className="ingredient-icon">{ingredient.icon}</div>
            <h3>{ingredient.name}</h3>
            <p>{ingredient.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VitalIngredients;
