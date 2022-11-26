import React, { useState } from 'react';
import Text from './Text';

export default function Accordion(props) {
  const headComponent = props.headComponent ?? <div />;
  const child = props.children ?? <div />;

  const [isOpen, setIsOpen] = useState(false);

  const onSpanClick = (e) => {
    const senderElement = e.target.className;
    if (senderElement.includes("clickable")) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className='hover-background1 clickable' style={{
      borderRadius: "5px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px"
    }} onClick={onSpanClick}>
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        {/* Expand/close Button */}
        <div className='clickable' style={{
          borderRadius: "5px",
          padding: "10px 10px",
          marginRight: "10px"
        }}>
          {isOpen && <Text><i className="bi bi-chevron-down clickable" /></Text>}
          {!isOpen && <Text><i className="bi bi-chevron-right clickable" /></Text>}
        </div>

        {/* headcomponent */}
        {headComponent}
      </div>
      {isOpen && 
        <div style={{marginTop: "15px"}}>
          {/* child component */}
          {child}
        </div>}
    </div>
  )
}