import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ 
  heading, 
  subheading, 
  description, 
  phoneLink, 
  emailLink, 
  shapeImages 
}) => {
  return (
    <div className="banner_carousel owl-carousel">
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="all_shapes">
                {shapeImages.map((shape, index) => (
                  <img 
                    key={index} 
                    src={shape.src} 
                    className={`img-fluid shape${index + 1}`} 
                    alt={`Shape${index + 1}`} 
                  />
                ))}
              </div>
              <div className="banner_slider text-center">
                <div className="col-md-8 m-auto banner_content">
                  <div className="common_heading text-center">
                    <div className="title_style">
                      <span></span>
                      <h3>{heading}</h3>
                    </div>
                    <h1 dangerouslySetInnerHTML={{ __html: subheading }}></h1>
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                  </div>
                  <div className="learn_more_button d-flex">
                    <a href={phoneLink} className="common_btn">Call us</a>
                    <a href={emailLink} className="common_btn white_button">Drop a Mail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Repeat the above section as needed for additional slides */}
    </div>
  );
};

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  phoneLink: PropTypes.string.isRequired,
  emailLink: PropTypes.string.isRequired,
  shapeImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero;
