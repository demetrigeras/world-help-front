import { React, useState, useEffect } from 'react';
import { getCharity } from '../services/charities.js';
import { useParams } from "react-router-dom";
import { getPledges, createPledge } from '../services/pledges.js';
import Pledge from '../components/Pledge.jsx';


export default function Charity(props) {
  const { user } = props
  const [charity, setCharity] = useState({})
  const [pledge, setPledge] = useState({
    email: '',
    amount: '',
    charity: ''
  })
  const [pledges, setPledges] = useState([])
  const [toggle, setToggle] = useState(false)

  let { id } = useParams()

  const fetchCharity = async () => {
    const oneCharity = await getCharity(id)
    setCharity(oneCharity)
  }

  useEffect(() => {
    fetchCharity()
    fetchPledges()
  }, [toggle])

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(pledge)
    await createPledge(pledge)
    setToggle(prev => !prev)
  }

  const handleChange = (e) => {
    setPledge({email: user.email,
      amount: e.target.value,
      charity: charity.name
    })
  }
  
  const fetchPledges = async () => {
    const allPledges = await getPledges()
    setPledges(allPledges)
  }
  const filteredPledges = pledges.filter(pledge => pledge.charity === charity.name)

  return (
  <>  
    <div className="charity-container">
      <div className="top-container">
        <h1>{charity.name}</h1>
        <p>{charity.mission_statement}</p>
      </div>
      <div className="left-container">
        <div className='charityInfo'>
          <p>Mission Statement: {charity.mission_statements}</p>
          <p>Cause Category: {charity.category}</p>
          <p>Private Donations: {charity.private_donations}</p>
          <p>Total Revenue: {charity.total_revenue}</p>
          <p>Fundrising Efficiency: {charity.fundraising_efficiency}%</p>
          <p>Charitable Commitments: {charity.charitable_commitment}%</p>
          <p>Click the link below to donate!</p>
          <a href={charity.website}>{charity.website}</a>
        </div>
      </div>

      <div className="right-container">
        <div className='Pledges'>
          <header>Pledges</header>
            {user ? (
              <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Enter your Amount" onChange={handleChange}/>
                <input type="submit" value="Pledge!" />
              </form>
             )
             :
             (
              <div>Sign up or sign in to make a pledge!</div>
             )
            }
       </div>
       <div className="bottom-right-container">
        <div>World-Help User Pledges</div>
        <div>{filteredPledges.map((pledge) => (
          <Pledge key={pledge._id} user={user} pledge={pledge} function={fetchPledges} setToggle={setToggle}/>
        ))}
       </div>
      </div>
    </div>
  </div>
</>
)}
