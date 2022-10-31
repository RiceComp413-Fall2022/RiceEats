import React from 'react';
import Button from "../components/Button";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/");
  };
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", alignContent: "center"}}>
      <Text customFontSize={120}><i class="bi bi-exclamation-triangle"/></Text>
      <Text>Uh Oh! It looks like our website broke :(</Text>
      <Button onClick={onButtonClick}>Return to home</Button>
    </div>
  )
}