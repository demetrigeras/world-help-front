import { React, useState, useEffect } from 'react';
import { getCharity } from '../services/charities.js';
import { useParams } from "react-router-dom";

export default function Charity() {
  const [charity, setCharity] = useState({})

  let { id } = useParams()

  const fetchCharity = async () => {
    const oneCharity = await getCharity(id)
    setCharity(oneCharity)
  }

  useEffect(() => {
    fetchCharity()
  }, [])

  return (
    <div>
      <h1>{charity.name}</h1>
      <p>{charity.category}</p>
      <p>{charity.private_donations}</p>
      <p>{charity.total_revenue}</p>
      <p>{charity.fundraising_efficiency}</p>
      <p>{charity.charitable_commitment}</p>
      <p>{charity.website}</p>
    </div>
  )
}
