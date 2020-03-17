import React from "react";
import Sound from "./Sound";
import CurrentSong from "../components/CurrentSong"
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
    <CurrentSong artistName={artistName} image={image} songName={songName} />
    <Sound mp3Url={mp3Url} />
    </div>
  );
};

export default connect(mapStateToProps)(Player);
