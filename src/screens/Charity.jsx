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
      <div className='chartitle'>
      <h2>{charity.name}</h2>
      </div>
      <div className='charmiss'>
      <h3>Mission Statement:</h3>
        <p>{charity.mission_statements}</p>
       </div>
      </div>
    
    <div className="left-parent">
        <div className='Pledges'>
            {user ? (
              <form  onSubmit={(e) => handleSubmit(e)}>
                <h2>Make a pledge!</h2>
                <input type="text" placeholder="Enter your Amount" onChange={handleChange}/>
                <button type="submit">Pledge!</button>
                <p>Make your pledge a reality and donate! <br />
          <a href={charity.website}>{charity.website}</a>
          </p>
          <h3>All Pledges to {charity.name}</h3>
          <div>{filteredPledges.map((pledge) => (
          <Pledge key={pledge._id} user={user} pledge={pledge} function={fetchPledges} setToggle={setToggle}/>
        ))}
       </div>
          </form>
              
             )
             :
             (
              <div className='Pledgesgosh'>
              <h3>Sign up or sign in to make a pledge!</h3>
              <div>&nbsp;</div>
              <p>Make your pledge a reality and donate! <br />
          <a href={charity.website}>{charity.website}</a>
          </p>
              </div>
            
             )
            }
            
       </div>
        
       
        <div className='charityInfo'>
         
          <h3>Charity Information</h3>
          <p>Cause: {charity.category}</p>
          <p>Private Donations: {charity.private_donations}</p>
          <p>Total Revenue: {charity.total_revenue}</p>
          <p>Fundrising Efficiency: {charity.fundraising_efficiency}%</p>
          <p>Charitable Commitments: {charity.charitable_commitment}%</p>
          </div>
    </div>
            
       <div className="pledge-log-container">
       <div className="pledge-log-text">
       <h3>Your Pledges</h3>
       </div>
  <div>
    {filteredPledges.map((pledge) => (
      <>
        {user?.email === pledge.email ? (
          <Pledge
            key={pledge._id}
            user={user}
            pledge={pledge}
            function={fetchPledges}
            setToggle={setToggle}
            showButtons={true} // Add this prop to enable buttons for user's pledges
          />
        ) : null}
      </>
    ))}
  </div>


      </div>
  </div>
</div> 
</>
)}

