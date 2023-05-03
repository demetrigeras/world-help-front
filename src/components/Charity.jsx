import { Link } from "react-router-dom";
import { React, useState, useEffect } from 'react';


export default function Charity({charity}) {
    return (
        <div>
            <Link to={`/charity/${charity._id}`} >
                <img className="logo" src={charity.logo} alt={charity.name} />
            </Link>
        </div>
    )
}
