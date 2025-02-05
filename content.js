chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "UPDATE_PLAYBACK_SPEED") {
        const video = document.querySelector("video");
        video.playbackRate = message.speed;
    }
});
