import React from 'react';

export default function Text(props) {
  const children = props.children;
  const white = props.white ?? false;
  const bold = props.bold ?? false;
  const large = props.large ?? false;
  
  return (
    <div style={{
      fontWeight: bold ? "bold" : "normal",
      fontSize: large ? 28 : 16,
      color: white ? "white" : "black",
      display: "flex",
      alignItems: "center"
    }}>
      {children}
    </div>
  )
}