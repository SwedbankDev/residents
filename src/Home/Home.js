import React from 'react';
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import DatetimeRangePicker from 'react-datetime-range-picker';
import { Button, Container } from "react-bootstrap";



function onSubmit() {
  window.location.href = "/carlist";
}

function Home() {

  return (
    <div className="home">
    <div style={{textAlign: "center"}}>
    <h1>Home</h1>
    </div>
    <div className="date">
    <DatetimeRangePicker />
    </div>
    <div style={{textAlign: "center"}}>
    <Button as="input" type="submit" value="Submit" onClick={onSubmit}/>
    </div> 
    </div>


  );
}

export default Home;