import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink, useParams } from 'react-router-dom';
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


const BuyTicketForm = ({start_date, party, user_id}) => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [expired, setExpired] = useState(false);
    const [end_date, setEndDate] = useState(new Date());
    const [qr_code, setQrCode] = useState('https://gane11.github.io/Aleksandar-Dordevic/');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (party) {
            let ticket = new FormData();
            ticket.append('expired', expired);
            ticket.append('start_date', start_date);
            ticket.append('end_date', start_date);
            ticket.append('qr_code', qr_code);
            ticket.append('party_id', party.id);
            ticket.append('user_id', user_id);
            await dispatch(buyTicket(ticket));
            history.push('/')
            alert('Thanks for buying a ticket!')
        }
    }


    // const updateProperty = (callback) => (e) => {
    //     callback(e.target.value);
    // }

    // if (!userId) {
    //     return <Redirect to="/" />
    // }
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
                            {start_date}
                        </Grid>
                        <Grid item xs={12} sm={15}>
                            {party.description}
                        </Grid>
                    </Grid>
                    <Button
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