chrome.runtime.onMessage.addListener(function(message, sender) {
	if (message.download1080Links) {
		
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			var url = tabs[0].url;
			if (url.indexOf("horriblesubs.info/shows") !== -1) {
				chrome.tabs.executeScript({file: 'jquery.js'}, function() {
					chrome.browserAction.setBadgeText({text: '1080'});
					chrome.tabs.executeScript({file: 'content1080.js'});
				});	
			}
		});
		  
	}
	else if (message.download720Links) {
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			var url = tabs[0].url;
			if (url.indexOf("horriblesubs.info/shows") !== -1) {
				chrome.tabs.executeScript({file: 'jquery.js'}, function() {
					chrome.browserAction.setBadgeText({text: '720'});
					chrome.tabs.executeScript({file: 'content720.js'});
				});	
			}
		});  
	}
	else if (message.download480Links) {
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			var url = tabs[0].url;
			if (url.indexOf("horriblesubs.info/shows") !== -1) {
				chrome.tabs.executeScript({file: 'jquery.js'}, function() {
					chrome.browserAction.setBadgeText({text: '480'});
					chrome.tabs.executeScript({file: 'content480.js'});
				});	
			}
		});  
	}
	else if (message.clearBadge) {
		chrome.browserAction.setBadgeText({text: ''});
	}
});

