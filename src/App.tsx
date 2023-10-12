import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Account from './ModuleAccess/Account';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const NavBar = () => {
  return (<nav>
    <ul>
      <li>
        <a href='/login'>Login</a>
      </li>
      <li>
        <a href='/account'>Account</a>
      </li>
    </ul>
  </nav>)
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
