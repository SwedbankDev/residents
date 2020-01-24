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
    <Container className="p-3">

      <div className="home">
        <h1>Home</h1>
        <div className="date">
          <DatetimeRangePicker />
        </div>
        <Button as="input" type="submit" value="Submit" onClick={onSubmit} />
      </div>

    </Container>

  );
}

export default Home;