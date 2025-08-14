chrome.action.onClicked.addListener(tab => chrome.tabs.update({ url: (new URL(tab.url)).origin + "/" }));
