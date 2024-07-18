import React from 'react';
import projectData from '../data/projects.json';

const ProjectSection = () => {
  return (
    <section className="project_section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="common_heading text-center">
              <div className="title_style">
                <span></span><h3>Our Latest Projects</h3>
              </div>
              <h2>Explore Our Latest Projects Now<br /><span>Successfully Finished</span></h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="project_filter">
              <button className="common_btn mixitup-control-active" data-filter="all">View All</button>
              <button className="common_btn" data-filter=".salesforce">Salesforce</button>
              <button className="common_btn" data-filter=".webdev">Web Development</button>
              <button className="common_btn" data-filter=".seo">SEO</button>
              <button className="common_btn" data-filter=".smm">SMM</button>
            </div>
            <div className="row projects_main gy-4">
              {projectData.map((project) => (
                <div key={project.id} className={`col-md-6 col-lg-4 mix ${project.category}`}>
                  <div className="project_item">
                    <img src={project.image} className="img-fluid" alt={`Project ${project.id}`} />
                    <div className="project_bottom">
                      <div className="wrapper">
                        <p>{project.description}<span></span></p>
                        <div className="icon">
                          <a href={project.link} target="_blank" rel="noopener noreferrer"><i className="ensurx-plus"></i></a>
                        </div>
                      </div>
                      <h4>{project.title}</h4>
                    </div>
                    <div className="shape">
                      <img src="assets/images/bg/project-item-shape.png" className="img-fluid" alt="Shape" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
