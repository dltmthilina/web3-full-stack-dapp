import { useState } from 'react';
import { ethers } from 'ethers';
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import './App.css';

const greeterAddress = 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512;

function App() {
  return (
    <div className="App">

      <div className='App-header'>
        <div>
          <h1>Greeter.sol</h1>
          <h3>Full stack dapp using ReactJS and Hardhat</h3>
        </div>
        <div className='custom-buttons'>
          <button style={{backgroundColor:'green'}}>Fetch Greeting</button>
          <button style={{backgroundColor:'red'}}>Set Greeting</button>
        </div>
        <input placeholder='Set Greein Message'/>
      </div>
      
    </div>
  );
}

export default App;
