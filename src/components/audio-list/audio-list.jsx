import { useAudioContext } from "../../context/audio-context";
import styles from "./audio-list.module.css";
import { FaPlay, FaPause } from "react-icons/fa";

const tracks = [
  {
    id: 1,
    title: "WIZKING GAVIRIA",
    src: "/audio/WIZKING-GAVIRIA.mp3",
    imgSrc: "/image/covers/Capture1.png",
  },
  {
    id: 2,
    title: "Tambazako",
    src: "/audio/Tambazako.mp3.m4a",
    imgSrc: "/image/covers/Capture2.png",
  },
];
const AudioList = () => {
  const { play, pause, isPlaying, currentTrack, setCurrentTrack } = useAudioContext();

  const handlePlayPause = (track) => {
    if (currentTrack?.src === track.src) {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    } else {
      setCurrentTrack(track);
    }
  };

  return (
    <div className={styles.container}>
      {tracks.map((track) => (
        <div
          key={track.id}
          className={`${styles.song} ${currentTrack?.src === track.src ? styles.songIsPlaying : ''}`}
          onClick={() => handlePlayPause(track)}
          style={{ cursor: 'pointer' }}
        >
          <img src={track.imgSrc} alt="SongCover" width='48px' height='48px' style={{ borderRadius: '6px' }} />

          <div className={`${styles.trackTitle} ${currentTrack?.src === track.src ? styles.titleIsPlaying : ''}`}>
            {track.title}
          </div>

          <button className={styles.buttonPrimary} style={{ pointerEvents: 'none' }}>
            {/* pointerEvents none so row click handles it, or handle stop propagation */}
            {currentTrack?.src === track.src && isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: '2px' }} />}
          </button>
        </div>
      ))}
    </div>
  )
}
export default AudioList