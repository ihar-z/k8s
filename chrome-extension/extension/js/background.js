chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('This is a first install!');
    setTimeout( () =>
      // chrome.tabs.query({ url: 'https://chrome.google.com/webstore/detail/*' }, (tabs) => {
      //     const storeTab = tabs.length === 1 ? tabs[0] : undefined;
          chrome.tabs.update({ url: 'http://crcontentdev5.crinfra.net:4502/content/cro/en/chrome-extension.html?wcmmode=disabled' })
        // }
      // )
    , 1000);
  }
});
