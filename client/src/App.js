import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
export const sum =(a,b) =>a+b;

function App() {
  return (
    <div className="App">
      <h1>Some Cool Stuff</h1>
      <Navbar/>
      <CardList/>
    </div>
  );
}

export default App;
