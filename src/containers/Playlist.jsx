import React from "react";
import { connect } from "react-redux";
import AllSongs from "../components/AllSongs";
import { setTrack } from "../actions/Actions";

const mapStateToProps = state => {
  return {
    tracks: state.playList.tracks,
    active: state.player.trackNumber
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTrack: trackNumber => dispatch(setTrack(trackNumber))
  };
};

const Playlist = ({ tracks, setTrack, active }) => {
  return <AllSongs tracks={tracks} setTrack={setTrack} active={active} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
