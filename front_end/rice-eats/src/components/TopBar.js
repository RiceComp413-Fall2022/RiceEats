import React from 'react';
import Button from "./Button";
import Text from "./Text";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
  const onLogoClick = () => {
    navigate("/");
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
      <Button>
        <Text white={true} bold={true}>
          SIGN IN
        </Text>
      </Button>
    </div>
  );
}