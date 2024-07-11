import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const ClientSection = () => {
  const clients = [
    "assets/images/logo/client1.svg",
    "assets/images/logo/client2.svg",
    "assets/images/logo/client3.svg",
    "assets/images/logo/client4.svg",
    "assets/images/logo/client5.svg",
    "assets/images/logo/client6.svg",
    "assets/images/logo/client7.svg"
  ];

  return (
    <section className="client_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="owl-theme client_carousel" loop margin={10} nav items={5} autoplay>
              {clients.map((client, index) => (
                <div key={index} className="client_item">
                  <img src={client} className="img-fluid" alt={`client-${index + 1}`} />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
