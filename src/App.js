import React from 'react';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import State from './components/State'
import Counter from './components/Counter'
import Click from './components/Click'
import EventBind from './components/EventBind'
function App() {
  return (
    <div className="App">
      <Greet name="Vikrant Mohite"/>
      <Welcome name="kappu"/>
      <Hello/>
      <State/>
      <Counter/>
      <Click/>
    </div>
  );
}

export default App;
