import React from "react";
import { useDispatch } from 'react-redux';
import { logout } from "../../services/auth";
import {logoutUser} from '../../store/actions/signupAction'
import Button from '@material-ui/core/Button';

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    await logout();
    dispatch(logoutUser())
    setAuthenticated(false);
    
  };

  return <Button variant="contained" color="primary" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
