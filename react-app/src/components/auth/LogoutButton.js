import React from "react";
import { useDispatch } from 'react-redux';
import { logout } from "../../services/auth";
import Button from '@material-ui/core/Button';
import { destroySessionAction } from '../../store/reducers/rootReducer';


const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    await logout();
    dispatch(destroySessionAction());
    localStorage.removeItem('user_id')
    setAuthenticated(false);
  
  };

  return <Button style={{borderRadius: '2rem'}}variant="contained" color="primary" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
