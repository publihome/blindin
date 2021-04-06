import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import '../css/News.css';
import '../css/Navbar.css';
import logo from '../blindin_logo.png'


const ModalExample = (props) => {
  const {
    modal,
    url,
    toggle
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}><img src={logo} alt="title" className="logo"/></ModalHeader>
        <ModalBody >
            <iframe src={url}>

            </iframe>
          
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;