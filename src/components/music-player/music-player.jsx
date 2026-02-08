import { useRef, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa";

import styles from "./music-player.module.css" 
import { useAudioPlayer } from "../../hooks/use-audio-player"

export function MusicPlayer(){
    const {isPlaying, currentTime, duration, play, pause} = useAudioPlayer("./audio/WIZKING-GAVIRIA.mp3");


    return (
        <>
        <div className={styles.container}>
            <button className={styles.buttonPrimary} onClick={(isPlaying ? pause : play)}>{isPlaying ? <FaPause /> : <FaPlay />}
</button>
            <div className={styles.timer}>
                <span>0:00</span>/ <span>3:00</span>
            </div>
            <progress className={styles.progressbar} value={1} max={3}></progress>

        </div>
        </>
    )
}