import React from "react";
import "./../scss/Player.scss";

import Sound from "./Sound";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const trackNumber = state.player.trackNumber;

  if (state.playlist.tracks.length > 0) {
    return {
      artistName: state.playlist.tracks[trackNumber].album.artists[0].name,
      songName: state.playlist.tracks[trackNumber].name,
      image: state.playlist.tracks[trackNumber].album.images[0].url,
      mp3Url: state.playlist.tracks[trackNumber].preview_url
    };
  }
  return {
    artistName: "",
    songName: "",
    image: "",
    mp3Url: ""
  };
};

const Player = ({ artistName, image, songName, mp3Url }) => {
  return (
    <div className="Player" style={{ background: "rgba(71,47,145,0.15)" }}>
      <div className="Player__header">
        <div className="Player__image-wrapper">
          <div
            className="Player__image-shadow"
            style={{ backgroundImage: `url("${image}")` }}
          />

          <div
            className="Player__image"
            style={{ backgroundImage: `url("${image}")` }}
          />
        </div>
        <div className="Player__info" style={{ color: "#472F91" }}>
          <h1>{artistName}</h1>

          <h2>{songName}</h2>
        </div>
      </div>
      <Sound mp3Url={mp3Url} />
    </div>
  );
};

export default connect(mapStateToProps)(Player);
