import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const TestimonialsSection = () => {
    const testimonials = [
        {
          text: "Our dedicated team of experts is here to guide you through every step of the insurance journey ensuring you make informed choices tailored to your unique needs.",
          name: "Eleanor Pena",
          position: "CONSULTANT",
          sign: "assets/images/icon/sign.png",
          stars: "assets/images/bg/testimonial-stars.svg",
          middle: "assets/images/bg/testimonial-middle.png",
          quote: "assets/images/icon/testimonial-quote.png",
        },
        {
            text: "Our dedicated team of experts is here to guide you through every step of the insurance journey ensuring you make informed choices tailored to your unique needs.",
            name: "Eleanor Pena 1",
            position: "CONSULTANT",
            sign: "assets/images/icon/sign.png",
            stars: "assets/images/bg/testimonial-stars.svg",
            middle: "assets/images/bg/testimonial-middle.png",
            quote: "assets/images/icon/testimonial-quote.png",
          },
          {
            text: "Our dedicated team of experts is here to guide you through every step of the insurance journey ensuring you make informed choices tailored to your unique needs.",
            name: "Eleanor Pena 2",
            position: "CONSULTANT",
            sign: "assets/images/icon/sign.png",
            stars: "assets/images/bg/testimonial-stars.svg",
            middle: "assets/images/bg/testimonial-middle.png",
            quote: "assets/images/icon/testimonial-quote.png",
          },
          {
            text: "Our dedicated team of experts is here to guide you through every step of the insurance journey ensuring you make informed choices tailored to your unique needs.",
            name: "Eleanor Pena 3",
            position: "CONSULTANT",
            sign: "assets/images/icon/sign.png",
            stars: "assets/images/bg/testimonial-stars.svg",
            middle: "assets/images/bg/testimonial-middle.png",
            quote: "assets/images/icon/testimonial-quote.png",
          },
        // Add more testimonials as needed
      ];
    
      return (
        <section className="testimonial_section">
          <div className="container">
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
                <OwlCarousel className="owl-theme testimonial_carousel" loop margin={10} nav items={1} autoplay>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial_right">
                      <div className="testimonial_right_wrapper">
                        <span></span>
                        <p>{testimonial.text}</p>
                        <h4>{testimonial.name}</h4>
                        <h5>{testimonial.position}</h5>
                        <div className="testimonial_sign">
                          <img src={testimonial.sign} className="img-fluid" alt="sign" />
                        </div>
                        <div className="testimonial_stars">
                          <img src={testimonial.stars} className="img-fluid" alt="stars" />
                        </div>
                      </div>
                      <div className="testimonial_middle">
                        <img src={testimonial.middle} className="img-fluid" alt="middle" />
                      </div>
                      <div className="testimonial_quote">
                        <img src={testimonial.quote} className="img-fluid" alt="quote" />
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default TestimonialsSection
