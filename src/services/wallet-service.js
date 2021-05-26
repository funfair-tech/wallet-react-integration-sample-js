import { FunWalletEmbed, MessageListeners } from '@funfair-tech/wallet-sdk';
import Web3 from 'web3';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';

// you call this method when you want to load the wallet
// this can be on a button click or page load up to how
// your dApp needs it to act
export async function lazyLoadFunWallet() {
  // it returns the fun wallet sdk but this
  // is always exposed in `window.funwallet.sdk`
  await FunWalletEmbed.load({
    appId: '0x1b084986077d1aedfa1d92318fdcc7d1621fbc92deb390269b94226fd79c0ce6',
    // make sure its in a arrow expression
    // functions so it can get context to `this`
    // when executing your wallet event listener method
    eventListenerCallback: () => {
      registerEventListeners();
    },
  });
}

export function registerEventListeners() {
  window.funwallet.sdk.on(
    MessageListeners.restoreAuthenticationCompleted,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        restoreAuthenticationTaskCompleted$.next(true);

        if (result.data.isAuthenticated) {
          // result.data.result holds `AuthenticationCompletedResponeData` in for you.
          isAuthenticated$.next(true);
        }
      }
    }
  );

  window.funwallet.sdk.on(
    MessageListeners.walletInactivityLoggedOut,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(false);
      }
    }
  );

  window.funwallet.sdk.on(
    MessageListeners.walletDeviceDeletedLoggedOut,
    (result) => {
      if (result.origin === 'https://wallet.funfair.io') {
        isAuthenticated$.next(false);
      }
    }
  );

  window.funwallet.sdk.on(MessageListeners.isKycVerified, (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      if (!result.data.isVerified) {
        window.funwallet.sdk.showFunWalletModal();
      } else {
        // maybe show some kind of error message as in theory
        // your client should not be showing ability to popup KYC
        // when they are already verified
        console.error(
          'Your client should not show the kyc logic if already kyced'
        );
      }
    }
  });

  window.funwallet.sdk.on(MessageListeners.kycProcessCancelled, (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      if (result.data.cancelled) {
        window.funwallet.sdk.hideFunWalletModal();
        // you may want to move routes etc here hence why you hook onto this action
        // and the sdk does not
      }
    }
  });

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
  // register all the other events your interested in here...
}

export async function login() {
  const result = await window.funwallet.sdk.auth.login();
  console.log('Authentication result', result);
  // user all logged in
  isAuthenticated$.next(true);
}

export async function logout() {
  await window.funwallet.sdk.auth.logout();
  isAuthenticated$.next(false);
}

let web3 = undefined;

function web3Instance() {
  if (web3) {
    return web3;
  }

  return (web3 = new Web3(window.funwallet.sdk.ethereum));
}

export async function signAMessage(messageText) {
  const ethereumAddress = await window.funwallet.sdk.eth.address();

  const result = await web3Instance().eth.personal.sign(
    messageText,
    ethereumAddress
  );

  return result;
}

export async function sendTransaction(tx) {
  const ethereumAddress = await window.funwallet.sdk.eth.address();
  tx.from = ethereumAddress;

  web3Instance()
    .eth.sendTransaction(tx)
    .once('transactionHash', (transactionHash) => {
      console.log('Transaction hash test app', transactionHash);
    })
    .on('error', async (error) => {
      console.log(error.message, error);
    });
}

export async function openKycProcess() {
  await window.funwallet.sdk.kyc.start();
}
