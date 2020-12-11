import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/signupAction";
import NavBarContainer from "./components/NavBar";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setLoaded(true);
      }
      const userId = localStorage.getItem('user_id');
      // (async() => {
      //   await dispatch(loadUser(userId));
      //   setLoaded(true);
      // })()
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact={true}>
          <NavBarContainer authenticate={authenticate} setAuthenticated={setAuthenticated}/>
        <h1>My Home Page</h1>
      </Route> 
      <Route path="/login" exact={true}>
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
        <UsersList/>
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
