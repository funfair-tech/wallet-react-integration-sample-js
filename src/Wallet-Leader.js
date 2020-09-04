import React, { Component } from 'react';
import { registerEventListeners } from './services/wallet-service';
import './Wallet-Leader.css';

class WalletLeader extends Component {
  render() {
    return (
      <div className="wallet-leader">
        <div id="fun-wallet-leader">
          <div className="fun-wallet-container">
            <iframe
              allow="camera"
              id="funwallet-iframe"
              is-fun-wallet="true"
              is-leader="true"
              onLoad={this.yourLeaderInstanceLoadFunction}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div id="fun-wallet-darken"></div>
      </div>
    );
  }

  yourLeaderInstanceLoadFunction() {
    window.funwallet.sdk.init();

    registerEventListeners();
  }
}

export default WalletLeader;
