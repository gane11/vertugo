import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, Redirect, NavLink } from 'react-router-dom';
import { signupUser } from '../../store/actions/signupAction';
// material-ui

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
    margin: theme.spacing(3, 0, 2),
  },
}));

//material-ui


const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [owner, setOwner] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      let user = new FormData();
      user.append('owner', owner);
      user.append('first_name', firstName);
      user.append('last_name', lastName);
      user.append('email', email);
      user.append('password', password);
      user = await dispatch(signupUser(user));

      if (user && !user.errors) {
        setAuthenticated(true);
        history.push("/")
      }
    }
  }


  

  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  }

  if (authenticated) {
    return <Redirect to="/" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid>
            <Grid item xs={16} sm={16}>
                <Checkbox
                color="primary"
                  autoComplete="fname"
                  name="owener"
                  variant="outlined"
                  fullWidth
                  id="owner"
                  label="Owner"
                  autoFocus
                  type="checkbox"
                  value={owner}
                  onClick={()=>setOwner(!owner)}
                  /> Night Club Owner
            </Grid>
            </Grid>
            <Grid item xs={12} sm={20}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                type="text"
                value={firstName}
                onChange={updateProperty(setFirstName)}
              />
            </Grid>
            <Grid item xs={12} sm={20}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                type="text"
                value={lastName}
                onChange={updateProperty(setLastName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="text"
                value={email}
                onChange={updateProperty(setEmail)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={updateProperty(setPassword)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={updateProperty(setConfirmPassword)}
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to='login' variant="body2">
                Already have an account? Sign in
                </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignUpForm