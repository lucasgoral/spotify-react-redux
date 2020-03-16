import React from "react";
import Sound from "./Sound";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const tracks = state.playList.tracks;
  const trackNumber = state.player.trackNumber;

  if (tracks.length > 0) {
    return {
      artistName: tracks[trackNumber].album.artists[0].name,
      songName: tracks[trackNumber].name,
      image: tracks[trackNumber].album.images[0].url,
      mp3Url: tracks[trackNumber].preview_url
    };
  }
  return {
    artistName: "Artist",
    songName: "Song title",
    image: "",
    mp3Url: ""
  };
};

const Player = ({ artistName, image, songName, mp3Url }) => {
  return (
    <div className="Player">
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
        <div className="Player__info">
          <h1>{artistName}</h1>

          <h2>{songName}</h2>
        </div>
      </div>
      <Sound mp3Url={mp3Url} />
    </div>
  );
};

export default connect(mapStateToProps)(Player);
