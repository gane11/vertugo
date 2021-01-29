import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'




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

const ClubCard = ({ club }) => {

    const classes = useStyles()



    return (
        <>
            <NavLink className="user__name" to={`/clubs/${club.id}`}>
                <div className="club-card">
                    <img src="https://media.giphy.com/media/YktPdM6gEPljGU0Agi/giphy.gif" alt=""></img>
                    <div className="club-card__info">
                        <h2>Name: {club.name}</h2>
                        <h2>City: {club.city}</h2>
                        <h2>State: {club.state}</h2>
                        <h3>Address: {club.address}</h3>
                        <h3>Description: {club.description}</h3>
                    </div>

                </div>
            </NavLink>
        </>

    )
}



export default ClubCard
