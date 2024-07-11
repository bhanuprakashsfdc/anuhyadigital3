import React from 'react'

const Minifooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer_bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>© {currentYear}. Created & Maintained by <a href="https://anuhyadigital.com/" target="_blank" rel="noopener noreferrer"> Anuhya Digital. </a> All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Minifooter
