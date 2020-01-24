import React from 'react';
import "./Confirm.css";
import { LinkContainer } from "react-router-bootstrap";
import DatetimeRangePicker from 'react-datetime-range-picker';
import {
  Button, 
  Card,
  Form,
  Container
} from "react-bootstrap";


function Confirm() {
  return (
    <div className="confirm">
      <Container className="p-3">
        <h1>Confirm Your Car Booking</h1>
        <Card>
          <Card.Body>
            <Card.Title>Read The Followning Terms and Conditions</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
            <Button variant="success">Confirm</Button>
            {/* <Button variant="danger">Cancel</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </div>

  );
}

export default Confirm;