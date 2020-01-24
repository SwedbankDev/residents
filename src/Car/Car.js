import React from 'react';
import "./Car.css";
import {ListGroup, Image, Button} from "react-bootstrap";

const Car = () => {
  return (
    <ListGroup.Item>
     <article className ="PlaylistItem">
		<div className="car-wrapper" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
		<Image src={"https://s.car.info/image_files/360/side-1-855852.jpg"} className="thumb" responsive/>
		<div className="details">	
		<h4 className="Title">Good Car</h4>
		<p className="Duration">something</p>
		<div className= "Rent">
		<Button bsStyle="danger"> Rent 10$</Button>
		</div>
		</div>

		</div>
		</article>
    </ListGroup.Item>

  );
}

export default Car;