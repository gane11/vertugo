import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Card.css'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import {saveParty, removeSavedParty} from '../store/actions/savePartyAction'



///material UI
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


//material UI

const Card = ({ party, clubs }) => {
    let saved = false;
    let userId = localStorage.getItem("user_id");
    const dispatch = useDispatch()

    const classes = useStyles()

    const handleSave = async (e) => {
        e.preventDefault();
        await dispatch(saveParty(userId,party.id))
        saved = true
    }

    const handleRemove = async (e) => {
        e.preventDefault();
        await dispatch(removeSavedParty(party.id))
        saved = false
    }

    return (
        <>
            <NavLink to={`/clubs/${party.club_id}`}>
                <div className="card">
                    <img src={party.party_cover_pic} alt=""></img>
                    <div className="card__info">
                        <h2>{party.description}</h2>
                        {/* <h4>{home.description}</h4> */}
                        <h3>{new Date(party.start_date).toDateString()}</h3>
                        <h4>{clubs[party.club_id - 1].city}</h4>
                    </div>
                    <div>
                        {saved ? (
                        <Button variant="contained" color="secondary" onClick={handleRemove}
                        >REMOVE</Button>
                        ):(
                            <Button variant="contained" color="secondary" onClick={handleSave}
                            >SAVE</Button>
                        ) } 
                        <NavLink to="/" exact={true} activeClassName="active">
                            <Button variant="contained" color="secondary"
                            >BUY</Button>
                        </NavLink>
                        <Button />
                    </div>
                </div>
            </NavLink>
        </>

    )
}



export default Card
