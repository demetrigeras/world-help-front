import { useState, useEffect } from 'react';
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
   <div className="charity-screen-full">
    <div className="charity-screen-grid">

      <div className="charity-screen-top-parent"> 
      <img className={charity.name} src={charity.logo} alt="charity logo" />

      <h2>{charity.name}</h2>
      <p>{charity.mission_statements}</p>
      </div>

    <div className="left-parent">
        <div className='Pledges'>

          <header>Make a pledge!</header>
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
        <div className='charityInfo'>
          <p>Cause: {charity.category}</p>
          <p>Private Donations: {charity.private_donations}</p>
          <p>Total Revenue: {charity.total_revenue}</p>
          <p>Fundrising Efficiency: {charity.fundraising_efficiency}%</p>
          <p>Charitable Commitments: {charity.charitable_commitment}%</p>
          <p>Click below to donate!<br />
          <a href={charity.website}>{charity.website}</a>
          </p>
        </div>
    </div>

       <div className="pledge-log-container">
        <div>Pledge Log</div>
        <div>{filteredPledges.map((pledge) => (
          <Pledge key={pledge._id} user={user} pledge={pledge} function={fetchPledges} setToggle={setToggle}/>
        ))}
       </div>
      </div>
  </div>
</div> 
</>
)}
