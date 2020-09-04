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

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
  // register all the other events your intrested in here...
}

export function login() {
  window.funwallet.sdk.openWalletAuthenticationPopUp();
}

export function logout() {
  window.funwallet.sdk.logout();
  isAuthenticated$.next(false);
}
