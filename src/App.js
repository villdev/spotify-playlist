import React, { useState } from "react";
import { songDB2 } from "./js/database";
import Spinner from "react-spinkit";
import "./css/style.css";

const database2 = songDB2();

export default function App() {
  const [selectedPlaylist, setPlaylist] = useState(Object.keys(database2)[2]);
  const [loading, setLoading] = useState([
    0,
    database2[Object.keys(database2)[2]].length,
    true,
  ]);

  function playlistClickHandler(playlist) {
    setPlaylist(playlist);
    setLoading([0, database2[playlist].length, true]);
  }
  function loadHandler() {
    setLoading([loading[0] + 1, loading[1], loading[2]]);
  }
  if (loading[2]) {
    if (loading[0] === loading[1]) {
      setLoading([loading[0], loading[1], false]);
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
      <div className="genre-wrapper">
        {Object.keys(database2).map((playlist) => (
          <button
            key={playlist}
            onClick={() => playlistClickHandler(playlist)}
            style={{
              cursor: "pointer",
              background: "#121212",
              borderRadius: "0.5rem",
              padding: "1rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
            className={playlist === selectedPlaylist ? "active" : ""}
          >
            {playlist}
          </button>
        ))}
      </div>
      <hr />
      <div className="content-wrapper" style={{ textAlign: "left" }}>
        {loading[2] ? (
          <div className="loader-wrapper">
            <Spinner name="cube-grid" color="green" fadeIn="none" />
          </div>
        ) : null}
        <ul
          className={loading[2] ? "loading-content" : "content"}
          style={{ paddingInlineStart: "0" }}
        >
          {database2[selectedPlaylist].map((songSrc) => (
            <li
              key={songSrc}
              style={{
                listStyle: "none",
                padding: "0",
                border: "1px solid #282828",
                width: "100%",
                margin: "1.5rem 0rem",
                borderRadius: "0.5rem",
                height: "80px",
              }}
            >
              <iframe
                title={"song" + songSrc}
                src={songSrc}
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                onLoad={loadHandler}
              ></iframe>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
