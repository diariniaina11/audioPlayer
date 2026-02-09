//creation du contexte dans le contenaire audioContext...
import { createContext, useContext } from "react";
import { useAudioPlayer } from "../hooks/use-audio-player";

const AudioContext = createContext();

export const useAudioContext = () => useContext(AudioContext);


export const AudioProvider = ({children}) => {
    const data = {lastName : "Doe", firstName:"John"}
    const audioPlayer = useAudioPlayer()
    console.log("audio::", audioPlayer);
    return (
        <AudioContext.Provider value = {audioPlayer}>
            {children}
        </AudioContext.Provider>
        
    )

}

