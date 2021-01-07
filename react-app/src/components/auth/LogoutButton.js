import React from "react";
import { useDispatch } from 'react-redux';
import { logout } from "../../services/auth";
import {logoutUser} from '../../store/actions/signupAction'
import Button from '@material-ui/core/Button';
import { destroySessionAction } from '../../store/reducers/rootReducer';


const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    await logout();
    dispatch(destroySessionAction());
    setAuthenticated(false);
  
  };

  return <Button variant="contained" color="primary" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
