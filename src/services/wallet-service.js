import Web3 from 'web3';
import { isAuthenticated$, restoreAuthenticationTaskCompleted$ } from './store';

export function registerEventListeners() {
  window.funwallet.sdk.on('authenticationCompleted', (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      isAuthenticated$.next(true);
    }
  });

  window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      restoreAuthenticationTaskCompleted$.next(true);
    }
  });

  window.funwallet.sdk.on('isKycVerified', (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      if (!result.data.isVerified) {
        window.funwallet.sdk.showFunWalletModal();
      } else {
        window.funwallet.sdk.hideFunWalletModal();
      }
    }
  });

  // TODO REMOVE THIS TO BE INTERNAL VIA SDK
  window.funwallet.sdk.on('kycProcessCancelled', (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      if (result.data.cancelled) {
        window.funwallet.sdk.hideFunWalletModal();
      }
    }
  });

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
  // register all the other events your interested in here...
}

export function login() {
  window.funwallet.sdk.openWalletAuthenticationPopUp();
}

export function logout() {
  window.funwallet.sdk.logout();
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
  const ethereumAddress = await window.funwallet.sdk.ethereumAddress();

  const result = await web3Instance().eth.personal.sign(
    messageText,
    ethereumAddress
  );

  return result;
}

export async function sendTransaction(tx) {
  const ethereumAddress = await window.funwallet.sdk.ethereumAddress();
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
  await window.funwallet.sdk.kycModalOpen();
}
