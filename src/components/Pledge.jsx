import { React, useState } from 'react';
import { updatePledge, deletePledge } from '../services/pledges.js';


export default function Pledge(props) {
    const {pledge, user, setToggle} = props
    const [pledgeUpdate, setUpdatePledge] = useState("")

    const handleUpdateChange = (e) => {
        setUpdatePledge({
            amount: e.target.value,
        })
    }
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        await updatePledge(pledge._id, pledgeUpdate)
        setToggle(prev => !prev)
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await deletePledge(pledge._id)
        setToggle(prev => !prev)
    }

    return (
    <div className="pledge-log-container">
        <div className="single-pledge-container">
        {pledge?.email} has donated ${pledge?.amount}
        { user?.email === pledge?.email && 
          (<>

          <div className="inputButtonContainer">
            <form onSubmit={handleUpdate}>
                <input className="input-field" type="text" placeholder="Enter your Amount" onChange={handleUpdateChange} />
                <input className='updateButton' type="submit" value="Update Pledge!" />
            </form>

            <form onSubmit={handleDelete}>
                <input className='deleteButton' type="submit" value="Delete Pledge!" />
            </form>
        </div> 

        </>)
        }
        </div>
    </div> 
    )
}
