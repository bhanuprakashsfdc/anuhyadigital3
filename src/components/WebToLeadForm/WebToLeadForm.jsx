import React from 'react';
import './WebToLeadForm.css';

const WebToLeadForm = () => {
  return (
    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D2x000004uBnW" method="POST">
      <input type="hidden" name="oid" value="00D2x000004uBnW" />
      <input type="hidden" name="retURL" value="https://anuhyadigital.com/" />

      <div className="form-group">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          name="first_name"
          maxLength="40"
          placeholder="Enter your first name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          name="last_name"
          maxLength="80"
          placeholder="Enter your last name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          maxLength="80"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          maxLength="40"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          className="form-control"
          id="company"
          name="company"
          maxLength="40"
          placeholder="Enter your company"
        />
      </div>

      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn</label>
        <input
          type="text"
          className="form-control"
          id="00N2x000006WIXH"
          name="00N2x000006WIXH"
          maxLength="20"
          placeholder="Enter your LinkedIn profile"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          placeholder="Enter your description"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default WebToLeadForm;
