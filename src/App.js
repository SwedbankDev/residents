import React from 'react';
import NavBar from "./Navbar/Navbar";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
function App() {
  return (
    <Router>
    <NavBar/>
    <Routes/>
    </Router>
  );
}

export default App;
