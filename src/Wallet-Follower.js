import React, { Component } from 'react';
import './Wallet-Follower.css';

class WalletFollower extends Component {
  render() {
    const url = window.funwallet.getWalletFollowerURL();
    return (
      <div className="wallet-follower">
        <iframe
          id="fun-wallet-follower"
          src={url}
          onLoad={this.yourFollowerInstanceLoadFunction}
          is-fun-wallet="true"
          is-follower="true"
        ></iframe>
      </div>
    );
  }

  async yourFollowerInstanceLoadFunction() {
    await window.funwallet.sdk.registerFollowerInstance();
  }
}

export default WalletFollower;
