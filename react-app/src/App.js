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
import NavBar from "./components/NavBar";
import Home from './components/Home'
import ClubProfile from './components/ClubProfile'
import SearchResult from "./components/SearchResult";
import CreateClubForm from './components/CreateClubForm'

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
      (async() => {
        await dispatch(loadUser(userId));
        setLoaded(true);
      })()
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact={true}>
          <Home authenticate={authenticate} setAuthenticated={setAuthenticated}/>
      </Route> 
        <Route exact path='/clubs/:id'>
          <NavBar />
          <ClubProfile />
        </Route>
      <Route exact path='/search' component={SearchResult}/>
      <Route path='/users/:userId/clubs'>
        <CreateClubForm />
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
      <Route path="/users" exact={true} authenticated={authenticated}>
        <UsersList/>
      </Route>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
