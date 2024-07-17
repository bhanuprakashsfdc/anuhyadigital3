import React from 'react';
import './TestimonialsSection.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Anuhya Digital's Salesforce consulting services have been a game-changer for our business. Their team helped us streamline our processes and maximize our Salesforce investment. We saw a significant improvement in our sales operations and customer management. Their expertise and dedication to client success are truly commendable.",
      name: "Robert White",
      position: "Director of Technology",
      sign: "assets/images/icon/sign.png",
      stars: "assets/images/bg/testimonial-stars.svg",
      middle: "assets/images/bg/testimonial-middle.png",
      quote: "assets/images/icon/testimonial-quote.png",
    },
    {
      text: "I am extremely impressed with the web design services provided by Anuhya Digital. They transformed our outdated website into a modern, user-friendly platform that has greatly enhanced our online presence. The team's creativity and attention to detail exceeded our expectations. We have received numerous compliments from our clients about our new website.",
      name: "Vashinavi",
      position: "Project Manager",
      sign: "assets/images/icon/sign.png",
      stars: "assets/images/bg/testimonial-stars.svg",
      middle: "assets/images/bg/testimonial-middle.png",
      quote: "assets/images/icon/testimonial-quote.png",
    },
    {
      text: "Anuhya Digital's SEO services have helped our business achieve top rankings on search engines. Their comprehensive approach and in-depth keyword research have significantly increased our online visibility and organic traffic. We are now reaching a larger audience and generating more leads than ever before. I highly recommend their SEO expertise.",
      name: "Elene",
      position: "Product Owner",
      sign: "assets/images/icon/sign.png",
      stars: "assets/images/bg/testimonial-stars.svg",
      middle: "assets/images/bg/testimonial-middle.png",
      quote: "assets/images/icon/testimonial-quote.png",
    },
    {
      text: "Thanks to Anuhya Digital's Google Map Optimization services, our local business has seen a tremendous boost in foot traffic and online inquiries. They optimized our Google My Business listing and ensured our business appears prominently in local searches. Their efforts have made it easier for customers to find us, and we've seen a noticeable increase in sales as a result.",
      name: "Chris Jospeh",
      position: "Owner",
      sign: "assets/images/icon/sign.png",
      stars: "assets/images/bg/testimonial-stars.svg",
      middle: "assets/images/bg/testimonial-middle.png",
      quote: "assets/images/icon/testimonial-quote.png",
    },
  ];

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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
                    {/* 
                    <div className="testimonial_sign">
                      <img src={testimonial.sign} className="img-fluid" alt="sign" />
                    </div>
                    */}
                    <div className="testimonial_stars">
                      <img src={testimonial.stars} className="img-fluid" alt="stars" />
                    </div>
                  </div>
                  {/* 
                  <div className="testimonial_middle">
                    <img src={testimonial.middle} className="img-fluid" alt="middle" />
                  </div>
                  
                  <div className="testimonial_quote">
                    <img src={testimonial.quote} className="img-fluid" alt="quote" />
                  </div>
                  */}
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
