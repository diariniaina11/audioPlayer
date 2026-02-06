import styles from "./music-player.module.css" 

export function MusicPlayer(){
    return (
        <div className={styles.container}>
            <button className={styles.buttonPrimary}>Play</button>
            <div className={styles.timer}>
                <span>0:00</span>/ <span>3:00</span>
            </div>
            <progress className={styles.progressbar} value={1} max={3}></progress>
            
        </div>

    )
}