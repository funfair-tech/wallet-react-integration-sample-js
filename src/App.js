import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { isAuthenticated$ } from './services/store';
import { login, logout } from './services/wallet-service';
import WalletFollower from './Wallet-Follower';

class App extends Component {
  constructor(props) {
    super();
    this.state = { isLoggedIn: false };
    isAuthenticated$.subscribe((value) => {
      this.setState({ isLoggedIn: value });
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.isLoggedIn ? (
            <button onClick={login}>Login</button>
          ) : null}
          {this.state.isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : null}
          {this.state.isLoggedIn ? <WalletFollower /> : null}
        </header>
      </div>
    );
  }
}

export default App;
