import React from 'react';

export default function Button(props) {
  const children = props.children;
  const onClick = props.onClick ?? (() => undefined);
  const fullWidth = props.fullWidth ?? false;

  const style = fullWidth ? {
    borderRadius: "5px",
    backgroundColor: "rgb(251, 131, 134)", //"rgb(41, 88, 163)",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    width: "100%"
  } : {
    borderRadius: "5px",
    backgroundColor: "rgb(251, 131, 134)", //"rgb(41, 88, 163)",
    display: "flex",
    justifyContent: "center",
    padding: 10
  };

  return (
    <div 
      style={style} 
      onClick={onClick}
      className="hover-shadow">
      {children}
    </div>
  )
}