import React from 'react';
import "./StartCar.css";
import qrscan from '../image/qrscan.gif'
import  { Link } from 'react-router-dom'

import { Card } from "react-bootstrap"
import {Button} from "react-bootstrap";

class StartCar extends React.Component {

  onSubmit = () => {    
    window.location.href = "/";
  }

render() { 

  return (
    <div  style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>

    <Card style={{ width: '18rem' } ,{ top: '5rem'}
  ,{display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
  } >
    <Card.Header>QR Scan</Card.Header>
    <Card.Img variant="top" src={qrscan} style={{width : '25rem'}} />
    <Card.Body>
      <Card.Text>
        Scan code to start the car
      </Card.Text>
      <div class="row p-1">
          <div class="col px-md-5">
           <Button variant="primary" style={{width: '15rem'}}  onClick={(e) => { if (window.confirm('Are you sure wish to cancel ?')) this.onSubmit(e) } } >Cancel</Button>
          </div>
      </div>
      <div class="row p-1">
          <div class="col px-md-5"> 
           <Button variant="primary" style={{width: '15rem'}} onClick={this.onSubmit.bind(this)}>Book New</Button>
          </div>
      </div>

    </Card.Body>
  </Card>
  </div>


);
}

}
export default StartCar;