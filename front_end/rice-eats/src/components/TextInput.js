import React from 'react';

export default function TextInput(props) {
  const value = props.value ?? "";
  const setValue = props.setValue ?? (() => undefined);

  return (
    <div>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}></input>
    </div>
  )
}