import React, {useState} from 'react';
import { NavLink, Redirect, Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import './NavBar.css'
import SearchResult from './SearchResult'

///material UI

import InputBase from '@material-ui/core/InputBase';
// import { Avatar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import vertugologo from './images/vertugologo.jpg'

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
          <div className="date_picker">
            <Link to={{
              pathname:'/search',
              aboutProps:{
                searchValue:{searchValue}
              }
            }}>
              <Button color="secondary"
              >SEARCH</Button>
            </Link>
          </div>
        </div>
      </div>
      {user.id ? (
        <div className='header__right'>
          <p className="welcome_letters">Welcome</p>
        
          <NavLink className="navbar__menu" to={`/users/${user.id}`}>
            {user.firstName}
          </NavLink>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      ) : (
          <div className='header__right'>
            <NavLink to="/login" exact={true} activeClassName="active">
              <Button variant="contained" color="secondary"
              >Login</Button>
            </NavLink>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              <Button variant="contained" color="secondary"
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