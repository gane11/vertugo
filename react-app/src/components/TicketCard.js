import React from 'react'
import {  useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'
import QRious from "qrious";
import {removeTicket} from '../store/actions/ticketsAction'
import CancelTicket from './CancelTicketModal'




///material UI
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
    const dispatch = useDispatch()

    const classes = useStyles()

    const handleRemove = async (e) => {
        e.preventDefault();
        await dispatch(removeTicket(ticket.id))
    }



    return (
        <>  
               
                <div className="ticket-card">
                <a className="ticket-carda" href={`/clubs/${ticket.id}`}>
                    <img src={qr.toDataURL('image/jpeg')} alt=""></img>
                    <div className="ticket-card__info">
    
                        <h2>{ticket.start_date.split('00:')[0]}</h2>
                        {/* <h4>{home.description}</h4> */}
                        {/* <h3>{club.city}</h3>
                        <h4>{club.state}</h4> */}
                    </div>
                    </a>
                    <div className="cancel-party__button">
                        <CancelTicket ticket={ticket}/>
                    </div>

                </div>
        </>

    )
}



export default TicketCard
