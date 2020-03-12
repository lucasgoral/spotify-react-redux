import React from 'react';
import Controls from './Controls';
import ProgressBar from './ProgressBar';



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
      isPaused: false
    }

  }


  componentDidUpdate() {
    if (this.mp3Url !== this.props.mp3Url) {
      this.handleMusicPlay();
    }

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
      this.pause();
      this.audio.setAttribute('src', this.props.mp3Url); //change the source
      this.audio.load();
    }
    else {
      this.audio = new Audio(this.props.mp3Url);
      this.audio.addEventListener('timeupdate', () => {

        this.setState({
          duration: this.audio.duration,
          currentTime: this.audio.currentTime,
          percent: this.audio.currentTime * 100 / this.audio.duration
        });

      });

    }
    this.play();

  }
  render() {

    return (
      <div className="Player__controls">
        <Controls toggle={() => { this.toggle() }} isPaused={this.state.isPaused}></Controls>
        <ProgressBar seekTime={(value) => { this.seekTime(value) }} duration={this.state.duration} currentTime={this.state.currentTime} percent={this.state.percent}></ProgressBar>
      </div>
    )
  }
}

export default Sound;
