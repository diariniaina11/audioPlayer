import { useEffect, useRef, useState } from "react"

export function useAudioPlayer(initialSrc) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(null);
    const audioRef = useRef(new Audio(initialSrc || undefined));

    useEffect(() => {
        const audio = audioRef.current;
        const updateCurrentTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", updateCurrentTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", updateCurrentTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    useEffect(() => {
        if (currentTrack) {
            audioRef.current.src = currentTrack.src;
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Playback failed:", error);
                setIsPlaying(false);
            });
        }
    }, [currentTrack]);

    const play = () => {
        if (!audioRef.current.src && !currentTrack) return;

        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Playback failed:", error);
                setIsPlaying(false);
            });
        } else {
            setIsPlaying(true);
        }
    }

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const formatTime = (seconds) => {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    return {
        isPlaying,
        currentTime,
        currentFormatedTime: formatTime(currentTime),
        duration,
        durationFormated: formatTime(duration),
        play,
        pause,
        currentTrack,
        setCurrentTrack
    };
}