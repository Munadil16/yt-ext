type Message = {
    type: string;
    speed: number;
};

export default defineContentScript({
    matches: ["*://*.youtube.com/*"],
    main() {
        browser.runtime.onMessage.addListener((message: Message) => {
            if (message.type === "UPDATE_PLAYBACK_SPEED") {
                const videoElt = document.querySelector("video");
                if (videoElt) {
                    videoElt.playbackRate = message.speed;
                }
            }
        });
    },
});
