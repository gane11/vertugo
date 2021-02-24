import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink, useParams, Redirect } from 'react-router-dom';
import { buyTicket } from '../store/actions/buyTicketAction'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
// material-ui

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(4),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
}));

//material-ui


const BuyTicketForm = ({ party, user_id, partyStart}) => {
    let userIdString = localStorage.getItem("user_id");
    let userId = Number(userIdString)

    const dispatch = useDispatch();
    const classes = useStyles();
    const [expired, setExpired] = useState(false);
    // const [end_date, setEndDate] = useState(new Date());
    const [qr_code, setQrCode] = useState('https://gane11.github.io/Aleksandar-Dordevic/');

    const history = useHistory();
  
    let startDate = new Date(partyStart)
    
    let nextDay = new Date(new Date(partyStart).getTime() + 24 * 60 * 60 * 1000)
    let tomorrow = nextDay.getDay()
  
    let start_date = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + tomorrow

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (party && userIdString) {
            let ticket = new FormData();
            ticket.append('expired', expired);
            ticket.append('start_date', start_date);
            ticket.append('end_date', start_date);
            ticket.append('qr_code', qr_code);
            ticket.append('party_id', party.id);
            ticket.append('user_id', user_id);            
            await dispatch(buyTicket(ticket));
            history.push(`/users/${user_id}`)
            alert('Thanks for buying a ticket!')
        } else {
            history.push("/login")
        }
    }



    if (!userId) {
        return <Redirect to="/login" />
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ConfirmationNumberIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Buy a Ticket 
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={16}>
                            {party.start_date}
                        </Grid>
                        <Grid item xs={12} sm={15}>
                            {party.description}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                       onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Buy
            </Button>
                    <Grid container justify="flex-end">
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default BuyTicketForm