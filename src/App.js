import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React-Redux Setup</h1>
      </header>
    </div>
  );
}

const mapStateProps = state => {
  return;
};

const mapDispatchProps = dispatch => {
  return;
};

export default connect(mapStateProps, mapDispatchProps)(App);
