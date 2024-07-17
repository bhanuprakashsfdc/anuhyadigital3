import React from 'react'
import { WEBSITE_NAME } from '../constants/constants';
import { WEBSITE_URL } from '../constants/constants';

const Minifooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer_bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>© {currentYear}. Created & Maintained by <a href={ WEBSITE_URL } target="_blank" rel="noopener noreferrer"> { WEBSITE_NAME }. </a> All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Minifooter
