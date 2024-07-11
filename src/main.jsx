import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Layout from './layouts/Layout.jsx';
import Home from './pages/Homepage.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/about-us.html" element={<Home />} />
          <Route path="/team.html" element={<Home />} />
          <Route path="/services.html" element={<Home />} />
          <Route path="/projects.html" element={<Home />} />
          <Route path="/blogs.html" element={<Home />} />
          <Route path="/contact.html" element={<Home />} />
        </Route>
    </Routes>
</Router>
);