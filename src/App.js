import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {
  isAuthenticated$,
  restoreAuthenticationTaskCompleted$,
} from './services/store';
import { login, logout } from './services/wallet-service';
import WalletFollower from './Wallet-Follower';

class App extends Component {
  constructor(props) {
    super();
    this.state = { isLoggedIn: false, loading: true };
    isAuthenticated$.subscribe((value) => {
      this.setState({ isLoggedIn: value });
      this.forceUpdate();
    });

    restoreAuthenticationTaskCompleted$.subscribe((value) => {
      if (value) {
        this.setState({ isLoggedIn: isAuthenticated$.value, loading: false });
        this.forceUpdate();
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.loading ? <p>Loading please wait</p> : null}
          {!this.state.isLoggedIn && !this.state.loading ? (
            <button onClick={login}>Login</button>
          ) : null}
          {this.state.isLoggedIn && !this.state.loading ? (
            <button onClick={logout}>Logout</button>
          ) : null}
          {this.state.isLoggedIn ? <WalletFollower /> : null}
        </header>
      </div>
    );
  }
}

export default App;
