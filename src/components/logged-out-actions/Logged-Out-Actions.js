import React, { Component } from 'react';
import { login } from '../../services/wallet-service';
import './Logged-Out-Actions.css';

class LoggedOutActions extends Component {
  render() {
    return (
      <div className="logged-in">
        <button onClick={login}>Login</button>
      </div>
    );
  }
}

export default LoggedOutActions;
