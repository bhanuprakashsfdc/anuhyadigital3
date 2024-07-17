import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardList,
  faChartLine,
  faDraftingCompass,
  faCode,
  faCheckCircle,
  faCloudUploadAlt,
  faLifeRing
} from '@fortawesome/free-solid-svg-icons';

const WorkingProcessSection = () => {
  const steps = [
    {
      icon: faClipboardList,
      title: "Requirement Gathering",
      description: "Collaborate closely with clients to understand and document their project needs and objectives.",
    },
    {
      icon: faChartLine,
      title: "Planning & Analysis",
      description: "Analyze client requirements to create a detailed project plan and define the project scope.",
    },
    {
      icon: faDraftingCompass,
      title: "Design & Prototyping",
      description: "Develop design mockups and prototypes to visualize the solution and ensure alignment with client expectations.",
    },
    {
      icon: faCode,
      title: "Development",
      description: "Execute the project plan by coding and integrating various components of the solution.",
    },
    {
      icon: faCheckCircle,
      title: "Testing & QA",
      description: "Conduct rigorous testing and quality assurance to ensure the solution is bug-free and meets all requirements.",
    },
    {
      icon: faCloudUploadAlt,
      title: "Deployment",
      description: "Deploy the solution to the production environment and ensure a smooth launch.",
    },
    {
      icon: faLifeRing,
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
          <div className="row justify-content-between">
            {steps.map((step, index) => (
              <div key={index} className={`col-md-3 text-center bxview ${index === 1 ? 'z-0' : ''} ${index === 2 ? 'z-1' : ''}`}>
                <div className="working_item">
                  <div className="working_icon">
                    <FontAwesomeIcon icon={step.icon} size="3x" className="img-fluid sizeics" alt={step.title} />
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
