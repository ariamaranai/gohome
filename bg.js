chrome.contextMenus.onClicked.addListener((_, tab) =>
  chrome.tabs.update({ url: (new URL(tab.url)).origin + "/" })
);
chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: "Go host",
    contexts: ["page", "frame", "link", "editable", "image", "video"],
    documentUrlPatterns: ["https://*/*", "http://*/*"]
  })
);