


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "injectCSS") {
    chrome.scripting.insertCSS({
      target: {tabId: sender.tab.id},
      files: ["style.css"]
    });
  }
});


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});