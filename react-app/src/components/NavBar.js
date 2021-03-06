import React, {useState} from 'react';
import { NavLink, Redirect, Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import SearchResult from './SearchResult'

///material UI

import InputBase from '@material-ui/core/InputBase';
// import { Avatar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import vertugologo from './images/vertugologo.png'

const useStyles = makeStyles((theme) => ({
  shape: {
    borderRadius: '2rem'
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    borderRadius: '2rem',
    backgroundColor: 'rgb(240,242,245)',

    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),

    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(0.5),
    //   width: 'auto',
    // },

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
    paddingLeft: `calc(1em + ${theme.spacing(0.2)}rem)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '10rem',
    },
  },
}));


//material UI

const NavBar = ({setAuthenticated, user }) => {
  const [searchValue, setSearchValue] = useState('')



  const updateSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const classes = useStyles();

  return (

    <div className='header'>
      <Link to='/'>
        <img
          className="header__icon"
          src={vertugologo}
          alt=""
        />
      </Link>

      <div className='header__center'>
        <div className={classes.search}>
          <InputBase
            placeholder="Where are you going?"
            onChange={updateSearch}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          </div>
          <div className="date_picker">
          <NavLink className="user__name" to={{
              pathname:`/search/${searchValue}`,
              aboutProps:{
                searchValue:{searchValue}
              }
            }}>
            <Button className={classes.shape} type="submit" variant="contained" color="primary" 
              >SEARCH</Button>
            </NavLink>
          </div>
      </div>
      {user.id ? (
        <div className='header__right'>
          <p className="welcome_letters">Welcome</p>
        
          <NavLink className="user-name" to={`/users/${user.id}`}>
            {user.firstName}
          </NavLink>
          <LogoutButton className={classes.shape} setAuthenticated={setAuthenticated}>
            Logout
          </LogoutButton>
        </div>
      ) : (
          <div className='header__right'>
            <NavLink to="/login" exact={true} activeClassName="active">
              <Button className={classes.shape} variant="contained" color="primary"
              >Login</Button>
            </NavLink>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              <Button className={classes.shape} variant="contained" color="primary"
              >Sign Up</Button>
            </NavLink>
          </div>
        )}
    </div>
  );
}

const NavBarContainer = ({setAuthenticated}) => {
  const user = useSelector(state => state.user)
  return(
    <NavBar setAuthenticated={setAuthenticated} user={user} />
  )
}

export default NavBarContainer;






// <div className='header'>
//   <Link to='/'>
//     <img
//       className="header__icon"
//       src={vertugologo}
//       alt=""
//     />
//   </Link>

//   <div className='header__center'>
//     <div className={classes.search}>
//       <InputBase
//         placeholder="Where are you going?"
//         onChange={updateSearch}
//         classes={{
//           root: classes.inputRoot,
//           input: classes.inputInput,
//         }}
//         inputProps={{ 'aria-label': 'search' }}
//       />
//     </div>
//   </div>
//   {user.id ? (
//      <div className='header__right'>
//       <p className="welcome_letters">Welcome</p>
//       <NavLink className="navbar__menu" to={`/users/${user.id}`}>
//         <div>{user.first_name}</div>
//       </NavLink>
//       <Button variant="contained" color="secondary"
//         onClick={logOutButtonHandler}
//         >LogOut</Button>
//     </div>
//   ) : ( 
//      <div className='header__right'>
//       <NavLink to="/login" exact={true} activeClassName="active">
//         <Button variant="contained" color="secondary"
//         >Login</Button>
//       </NavLink>
//       <NavLink to="/sign-up" exact={true} activeClassName="active">
//         <Button variant="contained" color="secondary"
//         >Sign Up</Button>
//       </NavLink>
//     </div>
//     )}
// </div>