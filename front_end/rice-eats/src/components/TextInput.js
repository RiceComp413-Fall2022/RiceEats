import React from 'react';
import { TextField } from '@mui/material';

export default function TextInput(props) {
  const value = props.value ?? "";
  const setValue = props.setValue ?? (() => undefined);
  const autocomplete = props.autocomplete ?? false;

  return (
    <div>
      <TextField 
        value={value} 
        onChange={event => setValue(event.target.value)} 
        size="small"
        autoComplete={autocomplete ? "on" : "off"}/>
    </div>
  )
}