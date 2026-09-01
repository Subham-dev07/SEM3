import { useState } from "react";

const SONGS = [
  { title: "Kesariya", artist: "Arijit Singh", color: "#E8871E", emoji: "🎸" },
  { title: "Blinding Lights", artist: "The Weeknd", color: "#7C5CFF", emoji: "🌃" },
  { title: "Levitating", artist: "Dua Lipa", color: "#2F7A6B", emoji: "🚀" },
];

// HINT: `song` is only needed inside <SongBadge>, but it's being
// drilled through <Player> and <ControlBar> as well. Refactor this
// using createContext() + useContext() so that Player and ControlBar
// no longer receive or pass down a `song` prop at all.

function App() {
  const [song, setSong] = useState(SONGS[0]);

  function shuffleSong() {
    const next = SONGS[Math.floor(Math.random() * SONGS.length)];
    setSong(next);
  }

  return <Player song={song} onShuffle={shuffleSong} />;
}

function Player({ song, onShuffle }) {
  return (
    <div className="player">
      <button onClick={onShuffle}>🔀 Shuffle</button>
      <ControlBar song={song} />
    </div>
  );
}

function ControlBar({ song }) {
  return (
    <div className="control-bar">
      <SongBadge song={song} />
    </div>
  );
}

function SongBadge({ song }) {
  return (
    <div className="song-badge" style={{ background: song.color }}>
      <span className="emoji">{song.emoji}</span>
      <div>
        <div className="title">{song.title}</div>
        <div className="artist">{song.artist}</div>
      </div>
    </div>
  );
}

export default App;