import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout.jsx';
import Home from '../pages/Homepage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import TeamPage from '../pages/TeamPage.jsx';
import ServicePage from '../pages/ServicePage.jsx';
import ProjectPage from '../pages/ProjectPage.jsx';
import BlogPage from '../pages/BlogPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.jsx';
import TermsConditionsPage from '../pages/TermsConditionsPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about-us.html" element={<AboutPage />} />
        <Route path="/team.html" element={<TeamPage />} />
        <Route path="/services.html" element={<ServicePage />} />
        <Route path="/projects.html" element={<ProjectPage />} />
        <Route path="/blogs.html" element={<BlogPage />} />
        <Route path="/contact.html" element={<ContactPage />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicyPage />} />
        <Route path="/terms-condtions.html" element={<TermsConditionsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
