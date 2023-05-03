import { React, useState, useEffect } from 'react';
import Charity from "../components/Charity.jsx";
import { getCharities } from "../services/charities.js";

export default function Home() {
  const [charities, setCharities] = useState([])

  const fetchCharities = async () => {
    const allCharities = await getCharities()
    setCharities(allCharities)
  }

  useEffect(() => {
    fetchCharities()
  }, [])

  return (
    <div>
        <div className="header">
          <h1>Welcome to World Help!</h1>
          <p>Click on any chairitable organization below to get more information!</p>
        </div>
        <div className="charities">
          {charities.map((charity) => (
            <Charity key={charity._id} charity={charity} />
          ))}
        </div>
    </div>
  )
}