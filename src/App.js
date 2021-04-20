import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin/Admin';
import Checkout from './components/Home/Checkout/Checkout';
import DashBoard from './components/DashBoard/DashBoard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddReview from './components/Home/Reviews/AddReview';
import AddStory from './components/Home/AddStory/AddStory';


export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Router>
      <Navbar />

      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>
        <Route path ="/home">
          <Home />
        </Route>
        <Route path ="/login">
          <Login />
        </Route>
        <PrivateRoute  path ="/admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute path ="/checkout/:id">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/myTours">
          <DashBoard />
        </PrivateRoute>
        <PrivateRoute path="/addReview">
          <AddReview />
        </PrivateRoute>
        <PrivateRoute path="/addStory">
          <AddStory />
        </PrivateRoute>


      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
