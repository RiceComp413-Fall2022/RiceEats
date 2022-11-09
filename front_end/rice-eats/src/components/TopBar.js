import React, { useState } from 'react';
import Button from "./Button";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import TextInput2 from './TextInput2';

export default function TopBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const onLogoClick = () => {
    navigate("/");
  };
  const onLoginClick = () => {
    setShowLoginModal(true);
  };
  const onCloseModal = () => {
    setShowLoginModal(false);
  };
  const onLogin = () => {
    // check validity
    // save in local data
    // update top bar look
    // close modal
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 75,
      paddingTop: 10,
      paddingBottom: 10}}>
      <div onClick={onLogoClick} style={{cursor: "pointer", height: "100%"}}>
        <img style={{height: "100%", width: "100%", display: "block"}}
          src="logo4.png" alt="rice eats logo"/>
      </div>
      <Button onClick={onLoginClick}>
        <Text white={true} bold={true}>
          SIGN IN
        </Text>
      </Button>
      <Modal show={showLoginModal} onHide={onCloseModal}>
        <Modal.Header closeButton>
          Login
        </Modal.Header>
        <Modal.Body>
          Enter login info here
          <TextInput2 value={username} setValue={setUsername}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCloseModal}>Cancel</Button>
          <Button onClick={onLogin}>Login</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}