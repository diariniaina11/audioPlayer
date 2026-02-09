
import { FaPlay, FaPause } from "react-icons/fa";

import styles from "./music-player.module.css"
import { useAudioContext } from "../../context/audio-context";
import { useEffect } from "react";

export function MusicPlayer() {
    const {
        isPlaying,
        currentTime,
        currentFormatedTime,
        duration,
        durationFormated,
        play,
        pause,
        currentTrack
    } = useAudioContext();


    if (!currentTrack) {
        return (
            <div className={styles.container}>
                <div style={{ width: '100%', textAlign: 'center' }}>Select a song to play</div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.trackInfo}>
                {currentTrack.title}
            </div>

            <div className={styles.controls_wrapper}>
                <button className={styles.buttonPrimary} onClick={(isPlaying ? pause : play)}>
                    {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: '4px' }} />}
                </button>
            </div>

            <progress
                className={styles.progressbar}
                value={currentTime}
                max={duration}></progress>

            <div className={styles.timer}>
                <span>{currentFormatedTime}</span>
                <span>{durationFormated}</span>
            </div>
        </div>
    )
}