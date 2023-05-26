import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCharity, getCharities } from '../services/charities.js';


const AddCharity = () => {
    const [charityData, setCharityData] = useState({
      name: '',
      category: '',
      private_donations: '',
      total_revenue: '',
      fundraising_efficiency: '',
      charitable_commitment: '',
      logo: '',
      website: '',
      mission_statements: ''
    });

    const [charities, setCharities] = useState([]);
  
  const navigate = useNavigate();

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCharityData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setCharityData({
        name: '',
        category: '',
        private_donations: '',
        total_revenue: '',
        fundraising_efficiency: '',
        charitable_commitment: '',
        logo: '',
        website: '',
        mission_statements: ''
      });
    };
  
    return (
        <div>
            <h1>Add Charity</h1>
       <div className="addingCharities">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={charityData.name} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={charityData.category} onChange={handleChange} />
        </label>
        <label>
          Private Donations:
          <input
            type="text"
            name="private_donations"
            value={charityData.private_donations}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Revenue:
          <input
            type="text"
            name="total_revenue"
            value={charityData.total_revenue}
            onChange={handleChange}
          />
        </label>
        <label>
          Fundraising Efficiency:
          <input
            type="number"
            name="fundraising_efficiency"
            value={charityData.fundraising_efficiency}
            onChange={handleChange}
          />
        </label>
        <label>
          Charitable Commitment:
          <input
            type="number"
            name="charitable_commitment"
            value={charityData.charitable_commitment}
            onChange={handleChange}
          />
        </label>
        <label>
          Logo:
          <input type="text" name="logo" value={charityData.logo} onChange={handleChange} />
        </label>
        <label>
          Website:
          <input type="text" name="website" value={charityData.website} onChange={handleChange} />
        </label>
        <label>
          Mission Statements:
          <textarea
            name="mission_statements"
            value={charityData.mission_statements}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    );
  };
  
  export default AddCharity;


