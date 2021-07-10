
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Profile from './pages/Profile';
import Navbar from './component/Navbar'
import Home from './pages/Home'
import PrivateRoute from './privateRoutes/PrivateRoute'
function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact paht="/profile" component={Profile}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
