import React from 'react';

export default function Text(props) {
  const children = props.children;
  const white = props.white ?? false;
  const bold = props.bold ?? false;
  const large = props.large ?? false;
  const customFontSize = props.customFontSize ?? 16;
  
  return (
    <div style={{
      fontWeight: bold ? "bold" : "normal",
      fontSize: large ? 28 : customFontSize,
      color: white ? "white" : "black",
      display: "flex",
      alignItems: "center"
    }}>
      {children}
    </div>
  )
}