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
import Banner from './components/Banner'
import CreatePartyForm from "./components/CreatePartyForm";
import Foter from "./components/Footer";
import My404Component from "./components/My404Component"
import Splash from "./components/splash/Splash"


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userId = localStorage.getItem("user_id");
      if (userId) {
        const user = await authenticate();
        if (!user.errors) {
          setAuthenticated(true);
        }
        (async () => {
          await dispatch(loadUser(userId));
          setLoaded(true);
        })()
      } else {
        setLoaded(true);
      }
    })();
  }, [dispatch, setAuthenticated]);

  if (!loaded) {
    return null;
  }

  // useEffect(() => {
  //   (async() => {
  //     const user = await authenticate();
  //     if (!user.errors) {
  //       setAuthenticated(true);
  //       setLoaded(true);
  //     }
  //     const userId = localStorage.getItem('user_id');
  //     (async() => {
  //       await dispatch(loadUser(userId));
  //       setLoaded(true);
  //     })()
  //   })();
  // }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/splash" exact={true}>
        <Splash />
      </Route>
      <Route path="/" exact={true}>
          <NavBar authenticate={authenticate} setAuthenticated={setAuthenticated} />
          <Home/>
          <Foter />
      </Route> 
        <Route exact path='/clubs/:id'>
          <NavBar authenticate={authenticate} setAuthenticated={setAuthenticated} />
          <ClubProfile />
          <Foter />
        </Route>
      <Route exact path='/search/:searchValue'>
        <NavBar authenticate={authenticate} setAuthenticated={setAuthenticated} />
        <SearchResult />
        <Foter />
      </Route>
      <Route path='/users/:userId/clubs'>
        <CreateClubForm />
      </Route>
      <Route path='/clubs/:clubId/parties'>
        <CreatePartyForm />
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
        <Foter />
      </Route>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <NavBar authenticate={authenticate} setAuthenticated={setAuthenticated} />
        <User />
        <Foter />
      </ProtectedRoute>
        <Route path='*' exact={true} component={My404Component} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
