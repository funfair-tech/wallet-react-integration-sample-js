import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { lazyLoadFunWallet } from './services/wallet-service';
import * as serviceWorker from './serviceWorker';

// you call this method when you want to load the wallet
// this can be on a button click or page load up to how
// your dApp needs it to act
lazyLoadFunWallet();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
