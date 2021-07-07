
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Profile from './pages/Profile';
import Navbar from './component/Navbar'
function App() {

  return (
    <>
    
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route pah="/profile" component={Profile}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
