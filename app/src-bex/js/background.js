// Background code goes here

const element = document.createElement('div')
element.id = 'q-app'
window.document.body.insertBefore(element, window.document.body.firstChild)

chrome.runtime.onMessageExternal.addListener(
  (message, sender, sendResponse) => {
    if (message.type === 'EXTENSION_AVAILABLE') {
      const manifest = chrome.runtime.getManifest()
      sendResponse({
        type: 'EXTENSION_AVAILABLE',
        success: true,
        version: manifest.version
      })
      return true
    } else if (message.type === 'SYNC_DATA') {
      localStorage.setItem('sync_data', message.data)
      chrome.windows.create(
        { url: chrome.runtime.getURL('www/index.html'),
          type: 'popup',
          height: 600,
          width: 400,
          top: 0,
          left: screen.width - 350,
          focused: true
        })
      const url = chrome.extension.getURL('www/index.html')
      sendResponse({
        type: 'SYNC_DATA',
        url: url,
        success: true
      })
    }
  })
// chrome.browserAction.onClicked.addListener((/* tab */) => {
//   // Opens our extension in a new browser window.
//   // Only if a popup isn't defined in the manifest.
//   chrome.tabs.create({
//     url: chrome.extension.getURL('www/index.html')
//   }, (/* newTab */) => {
//     // Tab opened.
//   })
// })
