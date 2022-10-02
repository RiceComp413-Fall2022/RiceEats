import React from 'react';

export default function Button(props) {
  const children = props.children;
  const onClick = props.onClick ?? (() => undefined);

  return (
    <div 
      style={{
        borderRadius: "5px",
        backgroundColor: "rgb(41, 88, 163)",
        display: "flex",
        justifyContent: "center",
        padding: 10
      }} 
      onClick={onClick}
      className="hover-shadow">
      {children}
    </div>
  )
}