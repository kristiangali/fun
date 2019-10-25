import React from 'react';
import logo from './logo.svg';
import './App.css';
// Testing Stateless Props
import Properties from './Stateless/Properties';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Properties />
    </div>
  );
}

export default App;
