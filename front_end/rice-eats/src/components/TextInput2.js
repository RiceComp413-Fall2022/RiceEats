import React from 'react';

export default function TextInput2(props) {
  const value = props.value;
  const setValue = props.setValue;

  return (
    <div>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}></input>
    </div>
  )
}