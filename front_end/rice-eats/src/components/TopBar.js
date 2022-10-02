import React from 'react';
import { Link } from 'react-router-dom';
import Button from "./Button";
import Text from "./Text";

export default function TopBar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      height: 60,
      paddingTop: 10,
      paddingBottom: 10}}>
      {/* TODO: Add link */}
      <img src="logo4.png"/>
      <Button>
        <Text white={true} bold={true}>
          SIGN IN
        </Text>
      </Button>
    </div>
  );
}