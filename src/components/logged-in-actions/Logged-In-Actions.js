import React, { Component } from 'react';
import {
  logout,
  sendTransaction,
  signAMessage,
} from '../../services/wallet-service';
import './Logged-In-Actions.css';

class LoggedInActions extends Component {
  render() {
    return (
      <div class="logged-out">
        <button onClick={this.signAMessage}>Sign message</button>
        <button onClick={this.sendSignedTransaction}>
          Send signed transaction
        </button>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  async signAMessage() {
    const signature = await signAMessage('TESTME');
    console.log('Sign message complete. sig -', signature);
  }

  async sendSignedTransaction() {
    const signature = await sendTransaction({
      to: '0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28',
      value: '0x00', // 0x38d7ea4c68000 if you want to add some value 0.002 ETH
    });

    console.log('Send signed transaction complete. sig -', signature);
  }
}

export default LoggedInActions;
