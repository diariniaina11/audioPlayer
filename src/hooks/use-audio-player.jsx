import { useEffect, useRef, useState } from "react"

export function useAudioPlayer(audioSrc){
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0)
    const audioRef = useRef(new Audio(audioSrc));
    
    useEffect(()=>{
        const audio =audioRef.current
        const updateCurrentTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = ()=> setDuration(audio.duration);

        audio.addEventListener("timeupdate", updateCurrentTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        return ()=>{    
            audio.removeEventListener("timeupdate", updateCurrentTime);
            audio.removeEventListener("loadedmetadata", updateDuration);     
        };
    }, []);
    const play =()=>{
        audioRef.current.play();
        setIsPlaying(true);
    }     
    const pause =()=>{
        audioRef.current.pause();
        setIsPlaying(false);
    }     
    return  {
        isPlaying,
        currentTime,
        duration,
        play,
        pause,

    };
        
}