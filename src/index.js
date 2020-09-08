import { WalletLeader } from '@funfair-tech/wallet-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { registerEventListeners } from './services/wallet-service';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <WalletLeader registerEventListeners={registerEventListeners} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
