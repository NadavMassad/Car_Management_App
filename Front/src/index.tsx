import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { MyOrders } from './components/orders/MyOrders';

// import Test from './components/Test';
// import { Login } from './components/Login';
// import Profile from './components/Profile';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Login } from './components/login/Login';
import Profile from './components/profile/Profile';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route path="/MyOrders" element={<MyOrders/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/profile" element={<Profile/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
