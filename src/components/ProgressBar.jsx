import React from "react";
import "./../scss/ProgressBar.scss";

const ProgressBar = props => {
  const currentTime = isNaN(props.currentTime) ? 0 : props.currentTime;
  const duration = isNaN(props.duration) ? 0 : props.duration;
  const toMinutes = s => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  };
  const time = toMinutes(Math.floor(currentTime));
  const fullTime = toMinutes(Math.floor(duration));
  const handleClick = e => {
    const x = e.pageX - e.target.offsetLeft;
    const elWidth = e.target.offsetWidth;
    const progress = x / elWidth;
    props.seekTime(progress * props.duration);
  };
  return (
    <div className="ProgressBar">
      <div className="ProgressBar__time">{time}</div>
      <div className="ProgressBar__bar-wrapper" onClick={handleClick}>
        <div className="ProgressBar__bar">
          <div
            className="ProgressBar__progress"
            style={{ width: `${props.percent}%` }}
          ></div>
        </div>
      </div>
      <div className="ProgressBar__full-time">{fullTime}</div>
    </div>
  );
};

export default ProgressBar;
