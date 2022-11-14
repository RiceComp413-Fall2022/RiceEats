import React, { useState } from 'react';
import Button from "./Button";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import TextInput from './TextInput';
import { getIsLoggedIn, setIsLoggedIn, setNetId } from '../utils/GlobalVars';

export default function TopBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [localIsLoggedIn, setLocalIsLoggedIn] = useState(getIsLoggedIn());
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
    // TODO: check validity
    const isValid = username.match(/^(([A-z])([A-z])([A-z])?([0-9])+)$/);
    if (!isValid) {
      alert("Invalid NetID!");
      return;
    }
    
    // save in local data
    setNetId(username);
    setIsLoggedIn(true);
    setLocalIsLoggedIn(true);

    // close modal
    setShowLoginModal(false);
  };

  const onLogOut = () => {
    setIsLoggedIn(false);
    setLocalIsLoggedIn(false);
    setUsername("");
  }

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

      {!localIsLoggedIn &&
        <Button onClick={onLoginClick}>
          <Text white={true} bold={true}>
            SIGN IN
          </Text>
        </Button>
      }
      {localIsLoggedIn &&
        <Button onClick={onLogOut}>
          <Text white bold>
            LOG OUT
          </Text>
        </Button>
      }

      <Modal show={showLoginModal} onHide={onCloseModal}>
        <Modal.Header closeButton>
          Login
        </Modal.Header>
        <Modal.Body>
          <div style={{display:"inline"}}>
            <Text>Enter NetID:</Text>
            <TextInput value={username} setValue={setUsername} autocomplete/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCloseModal}>Cancel</Button>
          <Button onClick={onLogin}>Login</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}