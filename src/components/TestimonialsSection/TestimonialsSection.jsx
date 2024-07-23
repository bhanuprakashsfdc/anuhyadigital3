import React from 'react';
import './TestimonialsSection.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../../data/testimonials';

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Changed to 1 slide for mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  // Changed to 1 slide for mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial_section">
      <div className="container-fluid">
        <div className="row testimonial">
          <div className="col-md-4">
            <div className="testimonial_left">
              <div className="common_heading">
                <div className="title_style justify-content-start">
                  <span></span><h3>Our Happy Customers</h3>
                </div>
                <h2> Clients Praise Our <br /> <span> Exceptional Service </span> </h2>
              </div>
              <p>Our dedicated team of experts is here to guide you through every step of the insurance journey ensuring you make informed choices tailored to your unique needs.</p>
            </div>
          </div>
          <div className="col-md-8">
            <Slider {...settings} className="testimonial_carousel">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial_right">
                  <div className="testimonial_right_wrapper">
                    <span></span>
                    <p>{testimonial.text}</p>
                    <h4>{testimonial.name}</h4>
                    <h5>{testimonial.position}</h5>
                    <div className="testimonial_stars">
                      <img src={testimonial.stars} className="img-fluid" alt="stars" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
