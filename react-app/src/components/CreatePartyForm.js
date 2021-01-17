import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink, useParams } from 'react-router-dom';
import { createParty } from '../store/actions/createPartyAction'
// material-ui

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LocalBarIcon from '@material-ui/icons/LocalBar';
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


const CreatePartyForm = () => {
    const { clubId } = useParams();
    const id = Number(clubId)

    const dispatch = useDispatch();
    const classes = useStyles();
    const [description, setDescription] = useState('');
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState(new Date());
    const [ticket_count, setTicketCount] = useState(100);
    const [party_cover_pic, setPartyCoverPic] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            let party = new FormData();
            party.append('description', description);
            party.append('start_date', start_date );
            party.append('end_date', start_date);
            party.append('club_id', id);
            party.append('ticket_count', ticket_count);
            party.append('party_cover_pic', party_cover_pic);
            await dispatch(createParty(party));
            history.push(`/clubs/${id}`)
            alert('Party Was Created')
        }
    }

    const updatePartyCoverPic = (e) => {
        setPartyCoverPic(e.target.files[0])
    }



    const updateProperty = (callback) => (e) => {
        callback(e.target.value);
    }

    // if (!userId) {
    //     return <Redirect to="/" />
    // }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LocalBarIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    New Party Form
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={16}>
                            <TextField
                                autoComplete="description"
                                name="description"
                                variant="outlined"
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                autoFocus
                                type="text"
                                value={description}
                                onChange={updateProperty(setDescription)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={15}>
                            <TextField
                                autoComplete="start_date"
                                name="start_date"
                                variant="outlined"
                                required
                                fullWidth
                                id="start_date"
                                label="Start Date"
                                autoFocus
                                type="date"
                                value={start_date}
                                onChange={updateProperty(setStartDate)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="tikcet_count"
                                label="Ticket Count"
                                name="ticket_count"
                                autoComplete="ticket_count"
                                type="number"
                                value={ticket_count}
                                onChange={updateProperty(setTicketCount)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={20}>
                            {/* <label className="file-upload"> */}
                            <TextField
                                type="file"
                                // className="file-upload"
                                // variant="filled"
                                required
                                fullWidth
                                name="party_cover_pic"
                                // label="Club Cover Image"
                                id="party_cover_pic"
                                autoComplete="partyCoverPic"
                                onChange={updatePartyCoverPic}
                            /> Upload Party Cover Picture
                            {/* </label> */}
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create the Party
            </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink to={`/`} variant="body2">
                                go back to home
                </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default CreatePartyForm