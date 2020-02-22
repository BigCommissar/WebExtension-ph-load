function updateActiveTab(tabs){
    function updateTab(tabs){
        if(tabs[0]){
            currentTab = tabs[0];
			var re = /https?:\/\/(\w+\.)?pornhub.com\/view_video\.php\?(.+)?viewkey=(\w+)/i;
			var result = re.exec(currentTab.url);
			if(result != null){
				browser.browserAction.enable();
            }else{
                browser.browserAction.disable();
            }
        }
    }

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then(updateTab);
}

browser.browserAction.onClicked.addListener(function(){
	function onExecuted(result){
		var downloadUrl = result[0];
		if(downloadUrl !== false){
			browser.downloads.download({
				url : downloadUrl
			});
		}else{
			console.log('Video not found!');
		}
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}

	var executing = browser.tabs.executeScript({
		file: 'ph-load.js'
	});
	executing.then(onExecuted, onError);
});

// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);

// update when the extension loads initially
updateActiveTab();