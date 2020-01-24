import React from 'react';
import "./Confirm.css";
import { LinkContainer } from "react-router-bootstrap";
import DatetimeRangePicker from 'react-datetime-range-picker';
import {
  Button, 
  Card,
  Form,
  Container,
  Row,
  Col,
  ListGroup
} from "react-bootstrap";


function onSubmit () {    
	window.location.href = "/startcar";
}


function onSubmitBack () {    
	window.location.href = "/carlist";
}


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
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row className="mt-2">
                    <Col>Renting Cost</Col>
                    <Col>€30</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="mt-2">
                  <Col>Tax (20%)</Col>
                  <Col>€6</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="font-weight-bold mt-2">
                  <Col>Total Cost</Col>
                  <Col>€36</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            
            <div className="mt-5">
            <Button variant="danger" style={{marginRight:'2rem'}} className="px-5 mt-2" onClick={onSubmitBack} >Back</Button>
              <Button variant="success" className="px-5 mt-2" onClick={onSubmit} >Confirm Booking</Button>
            </div>
            
           {/*  <Button className="px-5 mt-2" variant="success" >Confirm</Button>
            <Button className="px-5 mt-2" variant="danger" className="px-5 mt-2">Cancel</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </div>

  );
}

export default Confirm;