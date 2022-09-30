import React from 'react';

export default function TopBar() {
  return (
    <div style={{
      display: "flex",
      height: 60,
      paddingTop: 10,
      paddingBottom: 10}}>
      <img src="logo4.png"/>
      <button>Sign In!</button>
    </div>
  );
}