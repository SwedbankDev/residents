import React from 'react';
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import DatetimeRangePicker from 'react-datetime-range-picker';
import {Button} from "react-bootstrap";
function Home() {
  return (
    <div className="home">
    <h1>Home</h1>
    <div className="date">
    <DatetimeRangePicker />
    </div>
    <Button as="input" type="submit" value="Submit" />
    </div>

  );
}

export default Home;