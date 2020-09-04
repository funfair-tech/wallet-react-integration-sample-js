import React, { Component } from 'react';
import { login } from '../../services/wallet-service';
import './Logged-In-Actions.css';

class LoggedInActions extends Component {
  render() {
    return (
      <div class="logged-in">
        <button onClick={login}>Login</button>
      </div>
    );
  }
}

export default LoggedInActions;
