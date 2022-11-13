import React from 'react';
import { TextField } from '@mui/material';

export default function TextInput(props) {
  const value = props.value ?? "";
  const setValue = props.setValue ?? (() => undefined);

  return (
    <div>
      <TextField 
        value={value} 
        onChange={event => setValue(event.target.value)} 
        size="small"/>
      {/* <input type="text" value={value} onChange={event => setValue(event.target.value)}></input> */}
    </div>
  )
}