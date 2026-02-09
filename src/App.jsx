import AudioList from "./components/audio-list/audio-list";
import { MusicPlayer } from "./components/music-player/music-player";
import { AudioProvider } from "./context/audio-context";


function App() {
  return (
    <AudioProvider>
      <div className="app-container">
        <h1>Music Player</h1>
        <div className="player-wrapper">
          <MusicPlayer />
        </div>
        <div className="playlist-wrapper">
          <AudioList />
        </div>
      </div>
    </AudioProvider>
  );
}

export default App;
