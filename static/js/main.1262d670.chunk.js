(this["webpackJsonpwallet-react-integration-sample-js"]=this["webpackJsonpwallet-react-integration-sample-js"]||[]).push([[0],{213:function(n,e,t){n.exports=t.p+"static/media/logo.02850c4c.svg"},214:function(n,e,t){n.exports=t(498)},222:function(n,e,t){},234:function(n,e){},243:function(n,e){},261:function(n,e){},263:function(n,e){},280:function(n,e){},281:function(n,e){},283:function(n,e){},284:function(n,e){},360:function(n,e){},362:function(n,e){},371:function(n,e){},373:function(n,e){},398:function(n,e){},400:function(n,e){},406:function(n,e){},407:function(n,e){},409:function(n,e){},421:function(n,e){},424:function(n,e){},429:function(n,e){},440:function(n,e){},443:function(n,e){},495:function(n,e,t){},496:function(n,e,t){},497:function(n,e,t){},498:function(n,e,t){"use strict";t.r(e);var a=t(11),o=t.n(a),r=t(209),i=t.n(r),c=t(1),s=t(2),u=t(8),l=t(7),f=t(210),d=(t(222),t(10)),p=t.n(d),w=t(22),g=t(40),h=t(211),m=t.n(h),v=t(501),k=new v.a(!1),b=new v.a(!1);function y(){return(y=Object(w.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.FunWalletEmbed.load({appId:"0x1b084986077d1aedfa1d92318fdcc7d1621fbc92deb390269b94226fd79c0ce6",eventListenerCallback:function(){x()}});case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(){window.funwallet.sdk.on(g.MessageListeners.restoreAuthenticationCompleted,(function(n){"https://wallet.funfair.io"===n.origin&&(b.next(!0),n.data.isAuthenticated&&k.next(!0))})),window.funwallet.sdk.on(g.MessageListeners.walletInactivityLoggedOut,(function(n){"https://wallet.funfair.io"===n.origin&&k.next(!1)})),window.funwallet.sdk.on(g.MessageListeners.walletDeviceDeletedLoggedOut,(function(n){"https://wallet.funfair.io"===n.origin&&k.next(!1)})),window.funwallet.sdk.on(g.MessageListeners.isKycVerified,(function(n){"https://wallet.funfair.io"===n.origin&&(n.data.isVerified?console.error("Your client should not show the kyc logic if already kyced"):window.funwallet.sdk.showFunWalletModal())})),window.funwallet.sdk.on(g.MessageListeners.kycProcessCancelled,(function(n){"https://wallet.funfair.io"===n.origin&&n.data.cancelled&&window.funwallet.sdk.hideFunWalletModal()}))}function j(){return E.apply(this,arguments)}function E(){return(E=Object(w.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.auth.login();case 2:e=n.sent,console.log("Authentication result",e),k.next(!0);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(){return L.apply(this,arguments)}function L(){return(L=Object(w.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.auth.logout();case 2:k.next(!1);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var C=void 0;function M(){return C||(C=new m.a(window.funwallet.sdk.ethereum))}function A(n){return S.apply(this,arguments)}function S(){return(S=Object(w.a)(p.a.mark((function n(e){var t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.eth.address();case 2:return t=n.sent,n.next=5,M().eth.personal.sign(e,t);case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n){return N.apply(this,arguments)}function N(){return(N=Object(w.a)(p.a.mark((function n(e){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.eth.address();case 2:t=n.sent,e.from=t,M().eth.sendTransaction(e).once("transactionHash",(function(n){console.log("Transaction hash test app",n)})).on("error",function(){var n=Object(w.a)(p.a.mark((function n(e){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e.message,e);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(){return W.apply(this,arguments)}function W(){return(W=Object(w.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.kyc.start();case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t(495);var F=function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"signAMessage",value:function(){var n=Object(w.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A("TESTME");case 2:e=n.sent,console.log("Sign message complete. sig -",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"sendSignedTransaction",value:function(){var n=Object(w.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I({to:"0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28",value:"0x00"});case 2:e=n.sent,console.log("Send signed transaction complete. sig -",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"logged-in"},o.a.createElement("button",{onClick:this.signAMessage},"Sign message"),o.a.createElement("button",{onClick:this.sendSignedTransaction},"Send signed transaction"),o.a.createElement("button",{onClick:T},"Start KYC"),o.a.createElement("button",{onClick:O},"Logout"))}}]),t}(a.Component),B=(t(496),function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"logged-out"},o.a.createElement("button",{onClick:j},"Login"))}}]),t}(a.Component)),D=t(213),J=t.n(D),K=function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(n){var a;return Object(c.a)(this,t),(a=e.call(this,n)).state={isLoggedIn:!1,loading:!0},a}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var n=this;k.subscribe((function(e){n.setState({isLoggedIn:e,loading:!b.value}),n.forceUpdate()})),b.subscribe((function(e){e&&(n.setState({isLoggedIn:k.value,loading:!1}),n.forceUpdate())}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-container"},o.a.createElement("img",{src:J.a,className:"App-logo",alt:"logo"}),this.state.loading?o.a.createElement("p",null,"Loading please wait"):null,o.a.createElement("div",{className:"action-buttons"},this.state.isLoggedIn||this.state.loading?null:o.a.createElement(B,null),this.state.isLoggedIn&&!this.state.loading?o.a.createElement(F,null):null),this.state.isLoggedIn?o.a.createElement("div",{className:"wallet-follower"},o.a.createElement(f.WalletFollower,null)):null))}}]),t}(a.Component);t(497),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){y.apply(this,arguments)}(),i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[214,1,2]]]);
//# sourceMappingURL=main.1262d670.chunk.js.map