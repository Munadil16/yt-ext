import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

    useEffect(() => {
        browser.runtime.sendMessage({
            type: "UPDATE_PLAYBACK_SPEED",
            speed: playbackSpeed,
        });
    }, [playbackSpeed]);

    return (
        <main className="bg-neutral-900 px-2">
            <h1 className="text-blue-300 py-2 px-10 text-center text-xl font-semibold whitespace-nowrap border-b border-neutral-600">
                yt-ext
            </h1>

            <p className="text-blue-500 text-base font-semibold text-center mt-4 mb-1">
                {playbackSpeed}
            </p>

            <input
                min="1"
                max="5"
                step="0.1"
                type="range"
                className="mb-2"
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
            />
        </main>
    );
}

export default App;
