import React  from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import '../css/News.css';
import '../css/Navbar.css';
import logo from '../blindin_logo.png'


const ModalExample = (props) => {
  const {
    modal,
    url,
    toggle,
    img,
    title
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} scrollable={true} className="modal">
        <ModalHeader toggle={toggle}><img src={logo} alt="title" className="logo"/></ModalHeader>
        <ModalBody >
            <div className="container">
                <h2 className="title-new">{title}</h2>
              <div className="cont-img-new">
                {
                  img !== "without image" ?
                  (
                    <img src={img} alt="noticia" className="img-new-post"/>
                  ) : (
                    ""
                  )
                }
                <hr className="my-2"/>
              </div>
              <div className="new-content">
                {JSON.parse(url).map( info => (
                  <p>{info}</p>
                ))
                }
                <hr/>
              </div>
            </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;