import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {
  isAuthenticated$,
  restoreAuthenticationTaskCompleted$,
} from './services/store';
import {
  login,
  logout,
  sendTransaction,
  signAMessage,
} from './services/wallet-service';
import WalletFollower from './Wallet-Follower';

class App extends Component {
  constructor(props) {
    super();
    this.state = { isLoggedIn: false, loading: true };
  }

  componentDidMount() {
    isAuthenticated$.subscribe((value) => {
      this.setState({
        isLoggedIn: value,
        loading: !restoreAuthenticationTaskCompleted$.value,
      });
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
          {this.state.isLoggedIn && !this.state.loading ? (
            <button onClick={this.signAMessage}>Sign message</button>
          ) : null}
          {this.state.isLoggedIn && !this.state.loading ? (
            <button onClick={this.sendSignedTransaction}>
              Send signed transaction
            </button>
          ) : null}
          {this.state.isLoggedIn ? <WalletFollower /> : null}
        </header>
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

export default App;
