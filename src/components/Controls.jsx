
import { connect } from 'react-redux';
import React from 'react';
import '../scss/Controls.scss';
import Previous from "../images/Previous.svg";
import Pause from "../images/Pause.svg";
import Play from "../images/Play.svg";
import Next from "../images/Next.svg";
import { SET_TRACK } from "../actions/Actions";

const mapDispatchToProps = (dispatch) => {

  return { dispatch }
}


const mapStateToProps = (state, props) => {
  return {
    state,
    props,
    trackNumber: state.player.trackNumber,
    playlist: state.playlist.tracks
  };
}

const Controls = ({ state, props, dispatch, trackNumber }) => {
  const playNext = () => {
    const nextItemNumber = (state.playlist.tracks.length - 1) > trackNumber ? (trackNumber + 1) : trackNumber;
    dispatch({ type: SET_TRACK, trackNumber: nextItemNumber })
  }

  const playPrev = () => {
    const prevItemNumber = trackNumber > 0 ? (trackNumber - 1) : trackNumber;
    dispatch({ type: SET_TRACK, trackNumber: prevItemNumber })

  }

  return (
    <div className="Controls">
      <div className="Controls__buttons">
        <button className="Controls__prev" onClick={() => {
          playPrev();
        }

        }><img src={Previous} alt="Previous" /></button>
        <button className="Controls__toggle" onClick={props.toggle}><img src={props.isPaused ? Play : Pause} alt="Play/Pause" /></button>
        <button className="Controls__next" onClick={() => {
          playNext();
        }

        }><img src={Next} alt="Next" /></button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Controls);
