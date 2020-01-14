import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

const ModalPOTD = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [data, setData] = useState({})
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=WuAfUApgp4rxAF0QTZRAIQ0WeyXq8uTPjBi27NjP')
        .then(res => setData(res.data))
        .catch(err => `You hit an error: ${err}`)
    }, [])

  return (
    <div>
      <Button className='learnbutton' size='lg' color="info" onClick={toggle}>Learn more about {data.title}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Photo by: {data.copyright}</ModalHeader>
        <ModalBody>
          {data.explanation}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPOTD;