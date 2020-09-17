import { WalletFollower } from '@funfair-tech/wallet-react';
import React, { Component } from 'react';
import './App.css';
import LoggedInActions from './components/logged-in-actions/Logged-In-Actions';
import LoggedOutActions from './components/logged-out-actions/Logged-Out-Actions';
import logo from './logo.svg';
import {
  isAuthenticated$,
  restoreAuthenticationTaskCompleted$,
} from './services/store';

class App extends Component {
  constructor(props) {
    super(props);
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
        <div className="App-container">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.loading ? <p>Loading please wait</p> : null}
          <div className="action-buttons">
            {!this.state.isLoggedIn && !this.state.loading ? (
              <LoggedOutActions />
            ) : null}
            {this.state.isLoggedIn && !this.state.loading ? (
              <LoggedInActions />
            ) : null}
          </div>
          {this.state.isLoggedIn ? (
            <div class="wallet-follower">
              <WalletFollower />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
