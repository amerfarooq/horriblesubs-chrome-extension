'use strict';
chrome.browserAction.setBadgeText({text: ''});

document.getElementById('480p').addEventListener('click', function(e) {
    chrome.runtime.sendMessage({'download480Links': true});
});
document.getElementById('720p').addEventListener('click', function(e) {
    chrome.runtime.sendMessage({'download720Links': true});
});
document.getElementById('1080p').addEventListener('click', function(e) {
    chrome.runtime.sendMessage({'download1080Links': true});
});

