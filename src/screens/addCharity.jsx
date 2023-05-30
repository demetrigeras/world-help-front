import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createCharity, getCharity, getCharities } from '../services/charities.js';
import Charity from "../components/Charity.jsx";

export function AddCharity() {

    const [newLogo, setNewLogo] = useState('');
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

   
    const insertData = async (charityData) => {
        try {
          const response = await axios.post('/charity', charityData);
          if (response.status === 200) {
            const data = response.data;
            setNewLogo(data.logo); // Update the newLogo state with the URL of the newly added logo
            console.log('Data inserted successfully.');
          } else {
            console.error('Failed to insert data.');
          }
        } catch (error) {
          console.error('Error inserting data:', error);
        }
      };

    useEffect(() => {
        fetchCharities()
      }, [])
    
    const [charities, setCharities] = useState([])
     const fetchCharities = async () => {
        const allCharities = await getCharities()
        setCharities(allCharities)

     }
     
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCharityData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await insertData(charityData); // Use the correct insertData function
          if (response.status === 200) {
            const data = response.data;
            setNewLogo(data.logo); // Update the newLogo state with the URL of the newly added logo
            console.log('Data inserted successfully.');
      
            // Fetch the updated list of charities
            fetchCharities();
      
            // Reset the form fields
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
          } else {
            console.error('Failed to insert data.');
          }
        } catch (error) {
          console.error('Error inserting data:', error);
        }
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
      <div className="addcharity">
        {charities.map((charity) => (
          <div className="logo-container" key={charity.id}>
            <img src={charity.logo} alt={charity.name} />
            
          </div>
        ))}
      </div>
    </div>
  );
}
  export default AddCharity;


