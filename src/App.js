import React, { Component } from 'react';
import './App.css';
import LoggedInActions from './components/logged-in-actions/Logged-In-Actions';
import LoggedOutActions from './components/logged-out-actions/Logged-Out-Actions';
import logo from './logo.svg';
import {
  isAuthenticated$,
  restoreAuthenticationTaskCompleted$,
} from './services/store';
import WalletFollower from './Wallet-Follower';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, loading: true };
    this.followerLoaded = this.followerLoaded.bind(this);
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
          <div className="action-buttons">
            {this.state.loading ? <p>Loading please wait</p> : null}
            {!this.state.isLoggedIn && !this.state.loading ? (
              <LoggedOutActions />
            ) : null}
            {this.state.isLoggedIn && !this.state.loading ? (
              <LoggedInActions />
            ) : null}
          </div>
          {this.state.isLoggedIn ? (
            <WalletFollower onload={this.followerLoaded} page="/funds" />
          ) : null}
        </header>
      </div>
    );
  }

  async followerLoaded() {
    await window.funwallet.sdk.registerFollowerInstance();
  }
}

export default App;
