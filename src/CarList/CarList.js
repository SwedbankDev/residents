import React from 'react';
import "./CarList.css";
import { ListGroup} from "react-bootstrap";
import Car from "../Car/Car";
function CarList() {
  return (
    <div className="CarList">
    <ListGroup className="list" style={{maxWidth:"100vw"}}>

        
      <Car/>
      <Car/>
      <Car/>
    
  </ListGroup>
    </div>

  );
}

export default CarList;