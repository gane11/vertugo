import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({ party }) => {
    return (
        <>
            <NavLink to={`/clubs/${party.club_id}`}>
                <div className="card">
                    <img src={party.image} alt=""></img>
                    <div className="card__info">
                        <h2>{party.description}</h2>
                        {/* <h4>{home.description}</h4> */}
                        <h3>{`$${party.start_date}`}</h3>
                    </div>
                </div>
            </NavLink>
        </>

    )
}

export default Card
