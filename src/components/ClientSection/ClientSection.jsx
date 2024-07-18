import React from 'react';
import Slider from 'react-slick';
import './ClientSection.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientSection = () => {
  const clients = [
    "../../assets/images/clients/ajanu.png",
    "../../assets/images/clients/aarun.png",
    "../../assets/images/clients/asfdemo.png",
    "../../assets/images/clients/ags7.png",
    "../../assets/images/clients/ajb.png",
    "../../assets/images/clients/ajk.png",
    "../../assets/images/clients/asgic.png",
    "../../assets/images/clients/adisricargo.png",
    "../../assets/images/clients/srichad.png"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <section className="client_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings} className="client_carousel">
              {clients.map((client, index) => (
                <div key={index} className="client_item">
                  <img src={client} className="img-fluid" alt={`client-${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
