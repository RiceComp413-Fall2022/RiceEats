import React from 'react';

export default function Button(props) {
  const children = props.children;
  const onClick = props.onClick ?? (() => undefined);
  const fullWidth = props.fullWidth ?? false;
  const linkStyling = props.linkStyling ?? false;

  // todo: add dynamic link styling
  const style = fullWidth ? {
    borderRadius: "5px",
    backgroundColor: "rgb(251, 131, 134)", //"rgb(41, 88, 163)",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    width: "100%",
    cursor: "pointer"
  } : {
    borderRadius: "5px",
    backgroundColor: "rgb(251, 131, 134)", //"rgb(41, 88, 163)",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    cursor: "pointer"
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