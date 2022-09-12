import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState } from 'react';

function App() {
  const url = "http://127.0.0.1:8000/v1/";
  const [result, setResult] = useState("nothing recieved");
  axios.get(url).then(console.log)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World: {result}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
