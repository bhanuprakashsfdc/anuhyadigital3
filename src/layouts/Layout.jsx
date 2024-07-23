import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import WebDesignKeywords from '../components/SEO/WebDesignKeywords';
import SalesforceKeywords from '../components/SEO/SalesforceKeywords';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <WebDesignKeywords />
      <SalesforceKeywords />
      <Map />
      <Footer />
    </div>
  )
}

export default Layout
