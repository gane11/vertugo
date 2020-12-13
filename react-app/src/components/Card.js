import React, { useEffect } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {getClub} from '../store/actions/clubAction'
import { Button } from '@material-ui/core'


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

    const classes = useStyles();

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
                    <div>
                        <NavLink to="/" exact={true} activeClassName="active">
                            <Button variant="contained" color="secondary"
                            >Login</Button>
                        </NavLink>
                        <Button />
                    </div>
                </div>
            </NavLink>
        </>

    )
}



export default Card
