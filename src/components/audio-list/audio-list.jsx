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
        <div key={track.id} className={styles.song}>
          <img src={track.imgSrc} alt="SongCover" width='30px' height="30px" />
          <button className={styles.buttonPrimary} onClick={() => handlePlayPause(track)}>
            {currentTrack?.src === track.src && isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className={track.title}>
            {track.title}
          </div>
        </div>
      ))}
    </div>
  )
}
export default AudioList