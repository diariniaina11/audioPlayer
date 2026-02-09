import { useAudioContext } from "../../context/audio-context";
import styles from "./audio-list.module.css";
import { FaPlay, FaPause } from "react-icons/fa";

const tracks = [
    {
      id: 1,
      title: "Poster new song",
      src: "/audio/song-1.mp3",
      imgSrc: "/image/covers/Capture1.png",
    },
    {
      id: 2,
      title: "Agosto Lilis",
      src: "/audio/song-2.mp3",
      imgSrc: "/image/covers/Capture2.png",
    },
    {
      id: 3,
      title: "Music Festival",
      src: "/audio/song-3.mp3",
      imgSrc: "/image/covers/Capture3.png",
    },
    {
      id: 4,
      title: "New Collection",
      src: "/audio/song-4.mp3",
      imgSrc: "/image/covers/Capture4.png",
    },
    {
      id: 5,
      title: "Anzac - Forever in our Thoughts",
      src: "/audio/song-5.mp3",
      imgSrc: "/image/covers/Capture5.png",
    },
  ];
const AudioList = () => {
    const {isPlay, pause, isPlaying, currentTrack, setCurrentTrack} = useAudioContext();

    console.log(isPlay);
    return ( 
        <div className={styles.container}>
            {tracks.map((track)=>(
                <div key={track.id} className={styles.song}>
                    <img src={track.imgSrc} alt="SongCover" width='30px' height="30px" />
                    {
                        currentTrack === track.src ? <button className={styles.buttonPrimary}><FaPause /></button> : <button className={styles.buttonPrimary} onClick={()=> setCurrentTrack(track.src)}><FaPlay /></button>
                    }
                    <div className={track.title}>
                        {track.title}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default AudioList