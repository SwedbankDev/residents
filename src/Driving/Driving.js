import React from 'react';
import "./Driving.css";
import { ListGroup, Modal, Button} from "react-bootstrap";
import CountdownTimer from "react-component-countdown-timer";

const modalstyle = {
	minHeight: "80vw"
}

const Driving = () => {
  return (
    <div className="Driving" style={{marginTop:"10vh"}}>
    <h1>Driving</h1>
    <Modal.Dialog style={modalstyle} className="modal-wrap">
  <Modal.Header >
    <Modal.Title>Driving</Modal.Title>
  </Modal.Header>

  <Modal.Body style={{minHeight: "50vh"}} className="modal-body">
  <div>
  <CountdownTimer count={5432} size={30} />
   <h1>In there is maintainace issue Press maintainace Button someone will come and get you</h1>
   <Button variant="warning"> maintainace</Button>
  </div>


  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" className="modal-body">Return</Button>
  </Modal.Footer>
</Modal.Dialog>
    </div>

  );
}

export default Driving;