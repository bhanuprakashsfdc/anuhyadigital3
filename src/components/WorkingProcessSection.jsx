import React from 'react';

const WorkingProcessSection = () => {
  const steps = [
    {
      iconSrc: "assets/images/icon/working-icon1.svg",
      title: "Requirement Gathering",
      description: "Collaborate closely with clients to understand and document their project needs and objectives.",
    },
    {
      iconSrc: "assets/images/icon/working-icon2.svg",
      title: "Planning & Analysis",
      description: "Analyze client requirements to create a detailed project plan and define the project scope.",
    },
    {
      iconSrc: "assets/images/icon/working-icon3.svg",
      title: "Design & Prototyping",
      description: "Develop design mockups and prototypes to visualize the solution and ensure alignment with client expectations.",
    },
    {
      iconSrc: "assets/images/icon/working-icon4.svg",
      title: "Development",
      description: "Execute the project plan by coding and integrating various components of the solution.",
    },
    {
      iconSrc: "assets/images/icon/working-icon5.svg",
      title: "Testing & QA",
      description: "Conduct rigorous testing and quality assurance to ensure the solution is bug-free and meets all requirements.",
    },
    {
      iconSrc: "assets/images/icon/working-icon6.svg",
      title: "Deployment",
      description: "Deploy the solution to the production environment and ensure a smooth launch.",
    },
    {
      iconSrc: "assets/images/icon/working-icon7.svg",
      title: "Support & Maintenance",
      description: "Provide ongoing support and maintenance to ensure the solution continues to meet client needs.",
    }
  ];

  return (
    <section className="working_process_section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="common_heading text-center">
              <div className="title_style">
                <span></span><h3>Our Approach</h3>
              </div>
              <h2>Understanding the Mechanics<br /><span>Of Our Workflow</span></h2>
            </div>
          </div>
        </div>
        <div className="working_process_wrapper">
         {/* 
          <div className="working_line">
            <img src="assets/images/bg/working-line.png" className="img-fluid" alt="Working Line" />
          </div>
          */}
          <div className="row justify-content-between">
            {steps.map((step, index) => (
              <div key={index} className={`col-md-3 text-center bxview ${index === 1 ? 'z-0' : ''} ${index === 2 ? 'z-1' : ''}`}>
                <div className="working_item">
                  <div className="working_icon">
                    <img src={step.iconSrc} className="img-fluid" alt={step.title} />
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
