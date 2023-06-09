import React, { useState, useEffect } from 'react';
import { getCharities, createCharity } from '../services/charities';
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
    setInterval(function() {
      window.location.reload();
    }, 1000);
    
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
    <div className="addcharities">
      <h1 className='htmladdchar'>Add your Charity here!</h1>
      <div className="instructionsadd">
      <p>Please provide the necessary details in the input fields below to add your charity.</p>
     </div>
      <div className="addingCharities">
        <form className='formchar' onSubmit={handleSubmit} value="Charity!">
        <div className='fpart4inputs'>
          <label> 
            <div className='textschar'>
              
            <div>Name:</div>
           
           <input type="text" name="name" value={charityData.name} onChange={handleChange}  />
           </div>
          </label>
          <label>
          <div className='textschar'>
          <div> Category:</div>
            <input type="text" name="category" value={charityData.category} onChange={handleChange} />
            </div>
          </label>
          <label>
          <div className='textschar'>
          <div>Private Donations:</div>
            <input
              type="text"
              name="private_donations"
              value={charityData.private_donations}
              onChange={handleChange}
            />
            </div>
          </label>
         
          <label>
          <div className='textschar'>
            <div>Total Revenue:</div>
            <input
              type="text"
              name="total_revenue"
              value={charityData.total_revenue}
              onChange={handleChange}
            />
            
            </div>
          </label>
          </div>
          <div className='spart4inputs'>
          <label>
          <div className='textschar'>
           <div>Fundraising Efficiency:</div>
            <input
              type="number"
              name="fundraising_efficiency"
              value={charityData.fundraising_efficiency}
              onChange={handleChange}
            />
            </div>
          </label>
          
          <label>
          <div className='textschar'>
            <div>Charitable Commitment:</div>
            <input
              type="number"
              name="charitable_commitment"
              value={charityData.charitable_commitment}
              onChange={handleChange}
            />
            </div>
          </label>
          <label>
          <div className='textschar'>
            <div>Logo:</div>
            <input type="text" name="logo" value={charityData.logo} required={true} onChange={handleChange} />
            </div>
          </label>
          <label>
          <div className='textschar'>
          <div>Website:</div>
            <input type="text" name="website" value={charityData.website} onChange={handleChange} />
            </div>
          </label>
          </div>
          <label>
          
            <div>Mission Statements:</div>
            <textarea className='textarea'
              name="mission_statements"
              value={charityData.mission_statements}
              onChange={handleChange}
            />
            
          </label>
          <button className='addcharbut' type="submit">Submit</button>
        </form>
      </div>
      <div className="addcharity">
  {newLogo && (
    <div className="newLogo">
      <img className='grid-container' src={newLogo} alt="New Charity Logo" />
      <div className='textCharAdded'>
        Charity Added!
        </div>
    </div>
  )}
</div>
    </div>
  );
}

export default AddCharity;



