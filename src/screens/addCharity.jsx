import React, { useState, useEffect } from 'react';
import { getCharities, createCharity } from '../services/charities';
import Charity from '../components/Charity';
import { useNavigate } from 'react-router-dom';

export function AddCharity() {
  const navigate = useNavigate();
  const [newLogo, setNewLogo] = useState('');
  const [toggle, setToggle] = useState(false)
  const [charityData, setCharityData] = useState({
    name: '',
    category: '',
    private_donations: '',
    total_revenue: '',
    fundraising_efficiency: Number,
    charitable_commitment: Number,
    logo: '',
    website: '',
    mission_statements: '',
  });
  

  useEffect(() => {
    fetchCharities();
  }, [toggle]);

  const fetchCharities = async () => {
    const allCharities = await getCharities();
    setCharities(allCharities);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(charityData)
    await createCharity(charityData)
    console.log("test")
    setNewLogo(charityData.logo);
    setToggle(prev => !prev)
    navigate('/charity/addchar');
  }

  //   try {
  //       console.log('Request Payload:', charityData);
  //     const response = await createCharity(charityData);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setNewLogo(data.logo);
  //       console.log('Data inserted successfully.');

  //       fetchCharities();
       
  //       setCharityData({
  //         name: '',
  //         category: '',
  //         private_donations: '',
  //         total_revenue: '',
  //         fundraising_efficiency: Number,
  //         charitable_commitment: Number,
  //         logo: '',
  //         website: '',
  //         mission_statements: '',
  //       });
  //       setToggle(prev => !prev)
  //       navigate('addchar');
  //     } else {
  //       console.error('Failed to insert data.');
  //     }
  //   } catch (error) {
  //     console.error('Error inserting data:', error);
  //   }
  // };

  const [charities, setCharities] = useState([]);

  return (
    <div>
      <h1>Add Charity</h1>
      <div className="addingCharities">
        <form onSubmit={handleSubmit} value="Charity!">
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
          <Charity key={charity.id} charity={charity} />
        ))}
      </div>
      {newLogo  && (
        <div className="newLogo">
           Charity Added
        </div>
      )}
    </div>
  );
}

export default AddCharity;



