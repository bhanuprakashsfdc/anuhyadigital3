import React from 'react';

const Services = () => {
    return (
        <section className="service_section">
            <div className="col-md-8 m-auto">
                <div className="common_heading text-center">
                    <div className="title_style">
                        <span></span><h3>Our Best Services</h3>
                    </div>
                    <h2> Our Commitment to Excellent Service <br/> <span> Is A Source Of Pride </span> </h2>
                </div>
            </div>
                <div className="row service-slider serslid">
                    <ServiceItem
                        image="assets/images/service1.jpg"
                        icon="assets/images/icon-service1.svg"
                        title="Salesforce Consulting"
                        description="Enhance your business processes with our expert Salesforce consulting services."
                    />
                    <ServiceItem
                        image="assets/images/service2.jpg"
                        icon="assets/images/icon-service2.svg"
                        title="Web Development"
                        description="Create stunning websites and web applications tailored to your business needs."
                    />
                    <ServiceItem
                        image="assets/images/service3.jpg"
                        icon="assets/images/icon-service3.svg"
                        title="SEO Services"
                        description="Improve your online visibility and attract more organic traffic to your website."
                    />
                    <ServiceItem
                        image="assets/images/service4.jpg"
                        icon="assets/images/icon-service4.svg"
                        title="Social Media Marketing"
                        description="Engage your audience and grow your brand presence with strategic SMM services."
                    />
                    <ServiceItem
                        image="assets/images/service5.jpg"
                        icon="assets/images/icon-service5.svg"
                        title="Mobile App Development"
                        description="Build intuitive mobile apps that drive customer engagement and business growth."
                    />
                    <ServiceItem
                        image="assets/images/service6.jpg"
                        icon="assets/images/icon-service6.svg"
                        title="E-commerce Solutions"
                        description="Launch and optimize your online store with our scalable e-commerce solutions."
                    />
                    <ServiceItem
                        image="assets/images/service7.jpg"
                        icon="assets/images/icon-service7.svg"
                        title="Content Marketing"
                        description="Create compelling content that resonates with your target audience and drives conversions."
                    />
                    <ServiceItem
                        image="assets/images/service8.jpg"
                        icon="assets/images/icon-service8.svg"
                        title="Digital Strategy Consulting"
                        description="Develop a robust digital strategy to achieve your business goals effectively."
                    />
                </div>
        </section>
    );
}

const ServiceItem = ({ image, icon, title, description }) => {
    return (
        <div className="service_slider service_carousel owl-carousel serslidwidth">
            <div className="service_item p-0 text-center">
                <div className="service-top">
                    <img src={image} className="img-fluid" alt={title} />
                    <div className="service_middle_icon">
                        <div className="wrapper">
                            <img src={icon} className="img-fluid" alt={title} />
                         </div>
                         <span></span>
                    </div>
                </div>
                <div className="bottom">
                    <h4>{title}</h4>
                    <span></span>
                    <p>{description}</p>
                    <a href="#details">Learn More <i className="ensurx-plus"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Services;
