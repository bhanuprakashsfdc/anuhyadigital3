import React from 'react';

const PromoSection = () => {
  return (
    <div className="promo_section">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-4">
            <div className="promo_item">
              <h4>500+ Successful Projects</h4>
              <div className="icon_group">
                <img src="assets/images/icon/promo-1.svg" className="img-fluid" alt="promo-1" />
                <p>Our dedicated team ensures the success of your projects with expertise in Salesforce, web development, SEO, and SMM.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="promo_item p_item_2">
              <h4>80+ Expert Consultants</h4>
              <div className="icon_group">
                <img src="assets/images/icon/promo-2.svg" className="img-fluid" alt="promo-2" />
                <p>Our team of expert consultants provides top-notch Salesforce and digital marketing solutions tailored to your needs.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="promo_item">
              <h4>95% Client Satisfaction</h4>
              <div className="icon_group">
                <img src="assets/images/icon/promo-3.svg" className="img-fluid" alt="promo-3" />
                <p>We pride ourselves on our high client satisfaction rate, delivering exceptional results for every project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
