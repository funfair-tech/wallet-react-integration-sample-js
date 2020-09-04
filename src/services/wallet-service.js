export function registerEventListeners() {
  window.funwallet.sdk.on('authenticationCompleted', (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  });

  window.funwallet.sdk.on('restoreAuthenticationCompleted', (result) => {
    if (result.origin === 'https://wallet.funfair.io') {
      console.log(result.data);
    }
  });

  // https://funfair-tech.github.io/fun-wallet-docs/guide/web-sdk/sdk-event-listeners.html#list-of-all-available-listeners
  // register all the other events your intrested in here...
}
