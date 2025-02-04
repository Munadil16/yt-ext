type Message = {
    type: string;
    speed: number;
};

export default defineBackground(() => {
    browser.runtime.onMessage.addListener((message: Message) => {
        if (message.type === "UPDATE_PLAYBACK_SPEED") {
            browser.tabs.query(
                { active: true, currentWindow: true },
                (tabs) => {
                    if (tabs[0]?.id) {
                        browser.tabs.sendMessage(tabs[0].id, message);
                    }
                }
            );
        }
    });
});
