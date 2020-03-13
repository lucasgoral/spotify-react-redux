import { connect } from "react-redux";
import React from "react";
import Previous from "../images/Previous.svg";
import Pause from "../images/Pause.svg";
import Play from "../images/Play.svg";
import Next from "../images/Next.svg";
import { setTrack } from "../actions/Actions";

const PlaybackControls = ({ playPrev, playNext, isPaused, toggle }) => {
  return (
    <div className="Controls">
      <div className="Controls__buttons">
        <button className="Controls__prev" onClick={playPrev}>
          <img src={Previous} alt="Previous" />
        </button>
        <button className="Controls__toggle" onClick={toggle}>
          <img src={isPaused ? Play : Pause} alt="Play/Pause" />
        </button>
        <button className="Controls__next" onClick={playNext}>
          <img src={Next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default PlaybackControls;
