import React from "react";
import PlaybackControls from "../components/PlaybackControls";
import ProgressBar from "../components/ProgressBar";
import { connect } from "react-redux";
import { setTrack } from "../actions/Actions";

const mapStateToProps = state => {
  return {
    tracks: state.playList.tracks,
    trackNumber: state.player.trackNumber,
    playList: state.playList.tracks
  };
};

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.audio = null;
    this.mp3Url = this.props.mp3Url;

    this.state = {
      duration: 0,
      currentTime: 0,
      percent: 0,
      isPaused: false,
      isLoading: false
    };
  }

  componentDidUpdate() {
    if (this.mp3Url !== this.props.mp3Url) {
      this.handleMusicPlay();
    }
  }
  playNext() {
    const trackNumber = this.props.trackNumber;
    const nextItemNumber =
      this.props.tracks.length - 1 > trackNumber
        ? trackNumber + 1
        : trackNumber;
    this.props.dispatch(setTrack(nextItemNumber));
  }

  playPrev() {
    const trackNumber = this.props.trackNumber;
    const prevItemNumber = trackNumber > 0 ? trackNumber - 1 : trackNumber;
    this.props.dispatch(setTrack(prevItemNumber));
  }

  play() {
    if (this.audio) {
      this.audio.play();
      this.setState({
        isPaused: false
      });
    }
  }
  pause() {
    if (this.audio) {
      this.audio.pause();
      this.setState({
        isPaused: true
      });
    }
  }

  toggle() {
    if (this.audio) {
      this.audio.paused ? this.play() : this.pause();
    }
  }

  seekTime(time) {
    if (this.audio) {
      this.audio.currentTime = time;
    }
  }

  handleMusicPlay() {
    this.mp3Url = this.props.mp3Url;
    if (this.audio) {
      // this.pause();
      this.audio.setAttribute("src", this.mp3Url);
      this.audio.load();
    } else {
      this.audio = new Audio(this.mp3Url);
      this.audio.addEventListener("timeupdate", () => {
        this.setState({
          duration: this.audio.duration,
          currentTime: this.audio.currentTime,
          percent: (this.audio.currentTime * 100) / this.audio.duration
        });
      });
      this.audio.addEventListener("ended", () => {
        this.playNext();
      });
      this.audio.addEventListener("loadstart", () => {
        this.setState({ isLoading: true });
      });
      this.audio.addEventListener("canplay", () => {
        this.setState({ isLoading: false });
      });
    }
    this.play();
  }
  render() {
    return (
      <div className="Player__controls">
        <PlaybackControls
          toggle={() => {
            this.toggle();
          }}
          isPaused={this.state.isPaused}
          playNext={this.playNext.bind(this)}
          playPrev={this.playPrev.bind(this)}
          isLoading={this.state.isLoading}
        />

        <ProgressBar
          seekTime={value => {
            this.seekTime(value);
          }}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
          percent={this.state.percent}
        ></ProgressBar>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Sound);
