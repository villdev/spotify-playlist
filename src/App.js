import React, { useState } from "react";
import "./css/style.css";

const database = {
  "New Songs": [
    { name: "Runaway", artist: "Lost Kings, Destiny Rogers" },
    { name: "Into You", artist: "Melanie C" },
  ],

  "Fav Songs": [
    {
      name: "I'm Like A Bird",
      artist: "Alessia Cara",
    },
    {
      name: "queen of broken hearts",
      artist: "blackbear",
    },
  ],
  "Old Fav": [
    {
      name: "The Ocean",
      artist: "Mike Perry, Shy Martin",
    },
    {
      name: "Demons",
      artist: "Imagine Dragons",
    },
  ],
};

export default function App() {
  const [selectedPlaylist, setPlaylist] = useState(Object.keys(database)[0]);
  function playlistClickHandler(playlist) {
    setPlaylist(playlist);
  }
  function getClass(playlist) {
    if (playlist === selectedPlaylist) {
      return "active";
    } else {
      return "";
    }
  }
  return (
    <div className="wrapper">
      <h1>
        <span role="img" aria-label="music icon">
          🎵
        </span>
        Spotify Playlist
      </h1>
      <p style={{ fontSize: "smaller" }}>Checkout my recommended playlist.</p>
      <div>
        {Object.keys(database).map((playlist) => (
          <button
            key={playlist}
            onClick={() => playlistClickHandler(playlist)}
            style={{
              cursor: "pointer",
              background: "#121212",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
            className={getClass(playlist)}
          >
            {playlist}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {database[selectedPlaylist].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #282828",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller", color: "#dbdbdbc2" }}>
                {" "}
                {song.artist}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
