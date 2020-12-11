import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';

const NavBar = ({setAuthenticated, user }) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          {/* {user.id ? ( */}
          <LogoutButton setAuthenticated={setAuthenticated} />
            {/* ) : ( */}
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
         {/* )} */}
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
      </ul>
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
