import { React, useState } from 'react';
import { updatePledge, deletePledge } from '../services/pledges.js';


export default function Pledge(props) {
    const {pledge, user, setToggle,showButtons} = props
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
     
        <div className="single-pledge-container">
        {pledge?.email} has pledged ${pledge?.amount}
        {showButtons && (
          <div className="inputButtonContainer">
            <form onSubmit={handleUpdate}>
              <input
                className="input-field"
                type="text"
                placeholder="Enter your Amount"
                onChange={handleUpdateChange}
              />
              <button className="updateButton" type="submit">
              <span>Edit</span>
              </button>
            </form>
  
            <form onSubmit={handleDelete}>
            <button className="deleteButton" type="submit">
  <span>Delete</span>
</button>
            </form>
          </div>
        )}
      </div>
    );
  }
