import React from 'react';
import './components.css';

export default function Card(props) {
  const children = props.children;
  const backgroundColor = props.backgroundColor ?? "rgb(174, 197, 235)";
  const onClick = props.onClick ?? (() => undefined);
  return (
    <div 
      style={{
        borderRadius: "5px",
        backgroundColor: backgroundColor
      }} 
      className="hover-shadow"
      onClick={onClick}>
      <div style={{
        padding: "16px 16px"
      }}>
        {children}
      </div>
    </div>
  )
}