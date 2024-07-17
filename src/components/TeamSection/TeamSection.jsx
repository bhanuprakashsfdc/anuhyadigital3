import React from 'react';
import './TeamSection.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSection = () => {
  const teamMembers = [
    {
      imgSrc: "assets/images/img/team1.png",
      role: "CONSULTANT",
      name: "Jane Cooper",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      }
    },
    {
      imgSrc: "assets/images/img/team2.png",
      role: "CONSULTANT",
      name: "Jane Cooper",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      }
    },
    {
      imgSrc: "assets/images/img/team3.png",
      role: "CONSULTANT",
      name: "Cameron Williamson",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      }
    },
    {
      imgSrc: "assets/images/img/team1.png",
      role: "CONSULTANT",
      name: "Jane Cooper",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      }
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <section className="team_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="team_main">
              <div className="team_section_shape">
                <img src="assets/images/icon/team-section-shape.svg" className="img-fluid" alt="Team Section Shape" />
              </div>
              <div className="common_heading">
                <div className="title_style">
                  <span></span><h3>Our Specialist</h3>
                </div>
                <h2>Let's Introduce Our Expert<br /><span>Team Members</span></h2>
              </div>
              <Slider {...settings} className="team_carousel">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team_member">
                    <img src={member.imgSrc} className="img-fluid" alt={member.name} />
                    <div className="member_info">
                      <div className="member_info_wrapper">
                        <p>{member.role}<span></span></p>
                        <h5>{member.name}</h5>
                        <div className="member_share_link">
                          <i className="ensurx-share"></i>
                          <div className="member_social_link">
                            <ul>
                              <li><a href={member.socialLinks.instagram}><i className="ensurx-instagram"></i></a></li>
                              <li><a href={member.socialLinks.linkedin}><i className="ensurx-linkedin-solid"></i></a></li>
                              <li><a href={member.socialLinks.twitter}><i className="ensurx-x-twitter"></i></a></li>
                              <li><a href={member.socialLinks.facebook}><i className="ensurx-facebook-solid"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
