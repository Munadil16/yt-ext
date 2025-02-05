const speed = document.querySelector("input[type='range']");
const playbackSpeed = document.querySelector("#playback-speed");

chrome.storage.local.set({ speed: 1 });

chrome.storage.local.get(["speed"], (result) => {
    speed.value = result.speed;
    playbackSpeed.innerText = result.speed;
});

speed.addEventListener("input", (e) => {
    playbackSpeed.innerText = e.target.value;
    chrome.storage.local.set({ speed: e.target.value });
    chrome.runtime.sendMessage({
        action: "UPDATE_PLAYBACK_SPEED",
        speed: e.target.value,
    });
});
