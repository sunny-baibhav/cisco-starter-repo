import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      
      <Exhibit>
        <h2>Public IP Address</h2>
        <p>Your IP will appear here</p>
      </Exhibit>
      
      <Exhibit>
        <h2>Network Latency</h2>
        <p>Latency will appear here</p>
      </Exhibit>
    </div>
  );
}

export default App;