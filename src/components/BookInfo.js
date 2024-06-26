import {React , useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const BookInfo=( props)=>{
   
    return (
       
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   <h1>book info here</h1>
          </Modal.Title>
                
          </Modal.Header>
            <Modal.Body>
                {/* <img src={props.volumeInfo.thumbnail} alt="" width="1080" />
                <h3>{props.volumeInfo.description}</h3> */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
                
       
    )
}

   
        
      

export default BookInfo;