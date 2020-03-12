import React from 'react';
import './../scss/ProgressBar.scss';




const ProgressBar = (props) => {
  const currentTime = isNaN(props.currentTime) ? 0 : props.currentTime;
  const duration = isNaN(props.duration) ? 0 : props.duration;
  const toMinutes = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s };
  return (
    <div className="ProgressBar" >
      <div className="ProgressBar__time">{toMinutes(Math.floor(currentTime))}</div>
      <div className="ProgressBar__bar-wrapper" onClick={(event) => {
        const x = event.pageX - event.target.offsetLeft;
        const elWidth = event.target.offsetWidth;
        const progress = x / elWidth;
        props.seekTime(progress * props.duration);
      }}><div className="ProgressBar__bar"><div className="ProgressBar__progress" style={{ width: `${props.percent}%` }}></div></div></div>
      <div className="ProgressBar__full-time">{toMinutes(Math.floor(duration))}</div>
    </div>
  );
}

export default ProgressBar;
