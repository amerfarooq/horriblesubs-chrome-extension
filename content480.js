function copyToClipboard(text) {
  const ta = document.createElement('textarea');
  ta.style.cssText = 'opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;';
  ta.value = text;
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand('copy');
  ta.remove();
}

function copyMagnetLinks() {
	let links = []
	let magnetLinks = ``
	
	$(".hs-magnet-link").each(function() {
		if ($(this).parent().text().indexOf("480") != -1) {
		   links.push($(this).children().attr("href"));
		}
	})
	for (const link of links) {
		magnetLinks += link + '\n'
	}
	copyToClipboard(magnetLinks);
}

if ($('.show-more').text() === "No more results") {
	copyMagnetLinks();
}
else {
	chrome.runtime.sendMessage({'clearBadge': true});
	alert("Click Show more!");
}
	

