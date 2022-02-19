import React from 'react';
import './App.css';
import HatsContainer from './components/Hats/HatsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

function App(props) {
  return (
    <div className="app">
      <NavbarContainer />
      <div className="app-content">
        <HatsContainer />
      </div>
    </div>
  );
}

export default App;
