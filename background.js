chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "UPDATE_PLAYBACK_SPEED") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return;

            chrome.scripting.executeScript(
                {
                    target: { tabId: tabs[0].id },
                    files: ["content.js"],
                },
                () => {
                    chrome.tabs.sendMessage(tabs[0].id, message);
                }
            );
        });
    }
});
