import React, { Component } from 'react';
import './Wallet-Follower.css';

class WalletFollower extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let url = window.funwallet.getWalletFollowerURL();
    if (!this.props.page) {
      url = this.updateRouteToValue(url, this.props.page);
    }

    return (
      <div className="wallet-follower">
        <iframe
          id="fun-wallet-follower"
          src={url}
          onLoad={this.props.onload}
          is-fun-wallet="true"
          is-follower="true"
        ></iframe>
      </div>
    );
  }

  updateRouteToValue(url, page) {
    const walletUri = new URL(url);
    const searchParams = new URLSearchParams(walletUri.search);
    searchParams.set('routeTo', window.funwallet.formatRouterToValue(page));
    return walletUri.pathname + '?' + searchParams.toString();
  }
}

export default WalletFollower;
