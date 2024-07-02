import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BookInfo = ({ item, show, onHide }) => {
  return (
    item && (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>{item.volumeInfo.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={item.volumeInfo.thumbnail} alt="" />
          <h3>{item.volumeInfo.description}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default BookInfo;
