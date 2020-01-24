import React from 'react';
import NavBar from "./Navbar/Navbar";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function App() {
  return (
    <Router>
    <Header/>
    <NavBar/>
    <Routes/>
    <Footer/>
    </Router>
  );
}

export default App;
