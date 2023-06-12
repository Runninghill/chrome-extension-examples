console.log('[Background Colour Changer] Content Script Loaded');

chrome.runtime.onMessage.addListener(function (message) {
    console.log('[Background Colour Changer] Content Script - Message received', message);

    document.body.style.backgroundColor = message.color;
});
