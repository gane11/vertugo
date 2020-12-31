import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import QRious from "qrious";




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

//qr code
let qr = new QRious();
qr.set({
    background: 'white',
    // backgroundAlpha: 0.8,
    foreground: 'blue',
    foregroundAlpha: 0.8,
    level: 'H',
    padding: 25,
    size: 500,
    value: 'https://gane11.github.io/Aleksandar-Dordevic/'
});

qr.toDataURL('image/jpeg');

//qr code

const TicketCard = ({ ticket }) => {

    const classes = useStyles()



    return (
        <>
            <NavLink className="user__name" to={`/clubs/${ticket.id}`}>
                <div className="card">
                    <img src={qr.toDataURL('image/jpeg')} alt=""></img>
                    <div className="card__info">
    
                        <h2>{ticket.start_date}</h2>
                        {/* <h4>{home.description}</h4> */}
                        {/* <h3>{club.city}</h3>
                        <h4>{club.state}</h4> */}
                    </div>

                </div>
            </NavLink>
        </>

    )
}



export default TicketCard
