import React, { useEffect } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {getClub} from '../store/actions/clubAction'

const Card = ({ party, clubs }) => {

    console.log(clubs)
    return (
        <>
            <NavLink to={`/clubs/${party.club_id}`}>
                <div className="card">
                    <img src={party.party_cover_pic} alt=""></img>
                    <div className="card__info">
                        <h2>{party.description}</h2>
                        {/* <h4>{home.description}</h4> */}
                        <h3>{`${party.start_date}`}</h3>
                    </div>
                </div>
            </NavLink>
        </>

    )
}



export default Card
