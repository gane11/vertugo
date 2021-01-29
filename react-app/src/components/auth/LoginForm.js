import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/auth'
import { Redirect, useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {loadUser} from '../../store/actions/signupAction'

//material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//material ui



const LoginForm = ({ authenticated, setAuthenticated }) => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      localStorage.setItem('user_id', user.id);
      dispatch(loadUser(user.id))
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };


  const signInDemoUser = async (e) => {
    e.preventDefault();
    const user = await login('demo@user.com', 'password')
    if(!user.error) {
      localStorage.setItem('user_id', user.id)
      dispatch(loadUser(user.id))
      setAuthenticated(true)
    } else {
      setErrors(user.errors)
    }
    }


const signInDemoOwner = async (e) => {
  e.preventDefault();
  const user = await login('demo@owner.com', 'password')
  if (!user.error) {
    localStorage.removeItem('user_id')
    localStorage.setItem('user_id', user.id)
    dispatch(loadUser(user.id))
    setAuthenticated(true)
  } else {
    setErrors(user.errors)
  }
}


  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }



  if (authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <form className={classes.form} onSubmit={onLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="text"
            value={email}
            onChange={updateEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={updatePassword}
          />
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            size="large"
            onClick={signInDemoUser}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Demo User
          </Button>
          <Button
          onClick={signInDemoOwner}
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Demo Owner
          </Button>
          <Grid container>
            <Grid item>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClik}
                > Sign Up
                </Button> */}
              <NavLink to="/sign-up" exact={true} activeClassName="active" variant="body2">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginForm