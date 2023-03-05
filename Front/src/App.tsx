import React, { useEffect } from 'react';
import logo from './logo.svg';
import { MyOrders } from './components/orders/MyOrders';
import './App.css';
import { Cars } from './components/cars/Cars';
import { isLogged, logout, userAccess } from './components/login/loginSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Login } from './components/login/Login';
import Profile from './components/profile/Profile';

function App() {

  let logged = useAppSelector(isLogged)
  const dispacth = useAppDispatch()
  
  return (
    <div className="App">

      {!logged ?
        <Login /> :
        <div>
          <button onClick={()=> dispacth(logout())}>Log Out</button>
          <MyOrders /><hr />
          <Cars /><hr/>
          <Profile/>

        </div>}
    </div>
  );
}

export default App;
