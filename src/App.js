import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Profile from './Components/pages/Profile';
import Signup from './Components/pages/Signup';
import CreatePost from './Components/pages/CreatePost'

const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/create'>
        <CreatePost />
      </Route>
    </BrowserRouter>
  )
}

export default App;
