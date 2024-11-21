import React, { useEffect } from 'react';
import './App.css'
import Hero from './components/Hero'
import PromoSection from './components/PromoSection'
import Header from './components/Header'
import AboutSection from './components/AboutSection'
import Services from './components/Services'
import ProjectSection from './components/ProjectSection'
import TeamSection from './components/TeamSection/TeamSection'
import WorkingProcessSection from './components/WorkingProcessSection'
import ClientSection from './components/ClientSection/ClientSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection'
import Blogs from './components/Blogs'
import { WEBSITE_EMAILTag, WEBSITE_PHONETag } from './constants/constants'

function App() {
  useEffect(() => {
    const handlePageLoad = () => {
      // Check if page reload has already happened during this session
      const hasReloaded = sessionStorage.getItem('hasReloaded');
      if (!hasReloaded) {
        // Set flag to true so it only happens once
        sessionStorage.setItem('hasReloaded', 'true');
        // Reload the page once
        window.location.reload();
      } else {
        console.log('Page has fully loaded and reload has already happened once.');
      }
    };
    window.addEventListener('load', handlePageLoad);
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  const shapeImages = [
    { src: 'assets/images/bg/Shape1.png' },
    { src: 'assets/images/bg/Shape2.png' },
    { src: 'assets/images/bg/Shape3.png' },
  ];
  return (
    <>
      <Hero 
        heading="Transform Your Business"
        subheading="Your Reliable Digital <br /><span>Partner & Guide</span>"
        description="Our dedicated team of experts is here to guide you through every step of your <br /> digital transformation journey, ensuring you make informed choices."
        phoneLink={WEBSITE_PHONETag}
        emailLink={WEBSITE_EMAILTag}
        shapeImages={shapeImages}
      />
      <PromoSection />
      <AboutSection />
      <Services />
      <ProjectSection />
     {/* <TeamSection /> */} 
      <WorkingProcessSection />
      <ClientSection />
      <TestimonialsSection />
      <Blogs />
    </>
  )
}

export default App
