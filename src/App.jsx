import React from 'react'
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

function App() {
  return (
    <>
      <Hero />
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
