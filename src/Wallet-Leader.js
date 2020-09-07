import React, { Component } from 'react';
import './Wallet-Leader.css';

class WalletLeader extends Component {
  constructor(props) {
    super(props);
  }

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
              onLoad={this.props.onload}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div id="fun-wallet-darken"></div>
      </div>
    );
  }
}

export default WalletLeader;
