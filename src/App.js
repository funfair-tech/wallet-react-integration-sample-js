import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import WalletFollower from './Wallet-Follower';

let isLoggedIn = false;

class App extends Component {
  render() {
    if (!isLoggedIn) {
      this.poolForLogin();
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!isLoggedIn ? <button onClick={this.login}>Login</button> : null}
          {isLoggedIn ? <button onClick={this.logout}>Logout</button> : null}
          {isLoggedIn ? <WalletFollower /> : null}
        </header>
      </div>
    );
  }

  login() {
    window.funwallet.sdk.openWalletAuthenticationPopUp();
  }

  logout() {
    window.funwallet.sdk.logout();
    isLoggedIn = false;
  }

  poolForLogin() {
    const interval = setInterval(async () => {
      try {
        const result = await window.funwallet.sdk.isAuthenticated();
        isLoggedIn = result;
        if (result) {
          this.forceUpdate();
          clearInterval(interval);
        }
      } catch (error) {}
    }, 1000);
  }
}

export default App;
