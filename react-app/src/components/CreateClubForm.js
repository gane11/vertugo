import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, Redirect, NavLink, useParams} from 'react-router-dom';
import {createClub} from '../store/actions/createClubAction'
// material-ui

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

//material-ui


const CreateClubForm = () => {
    const { userId } = useParams();
    const id = Number(userId)

    const dispatch = useDispatch();
    const classes = useStyles();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [address, setAddress] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [club_cover_pic, setClubCoverPic] = useState('');
    
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(id) {
            let club = new FormData();
            club.append('name', name);
            club.append('description',description);
            club.append('city', city);
            club.append('state', state);
            club.append('address', address);
            club.append('lat', lat)
            club.append('lng', lng)
            club.append('club_cover_pic', club_cover_pic);
            club.append('owner_id', id)
            await dispatch(createClub(club));
            // history.push('/')
            //allert to let them know it worked
        }
        }

        const updateClubCoverPic = (e) => {
            setClubCoverPic(e.target.files[0])
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
                    New Club Form
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={16}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="clubName"
                                label="Club Name"
                                autoFocus
                                type="text"
                                value={name}
                                onChange={updateProperty(setName)}
                            />
                        </Grid>
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="city"
                                label="City"
                                name="city"
                                autoComplete="city"
                                type="text"
                                value={city}
                                onChange={updateProperty(setCity)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="state"
                                label="State"
                                name="state"
                                autoComplete="state"
                                type="text"
                                value={state}
                                onChange={updateProperty(setState)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="address"
                                label="Address"
                                type="text"
                                id="address"
                                autoComplete="address"
                                value={address}
                                onChange={updateProperty(setAddress)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lat"
                                label="Latitude"
                                name="lat"
                                autoComplete="lat"
                                type="number"
                                value={lat}
                                onChange={updateProperty(setLat)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lng"
                                label="Longtitude (-)"
                                name="lng"
                                autoComplete="lng"
                                type="number"
                                value={lng}
                                onChange={updateProperty(setLng)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={20}>
                            {/* <label className="file-upload"> */}
                            <TextField
                                type="file"
                                // className="file-upload"
                                variant="filled"
                                required
                                fullWidth
                                name="clubCoverPic"
                                // label="Club Cover Image"
                                id="clubCoverPic"
                                autoComplete="clubCoverPic"
                                onClick={updateClubCoverPic}
                            /> Upload Cover Picture
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
                        Create the club
            </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink to={`/users/${userId}`} variant="body2">
                                go back to your profile
                </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default CreateClubForm