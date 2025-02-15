import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitTimeArray = timeString.split(":");
  const minutes = Number(splitTimeArray[0]);
  const seconds = Number(splitTimeArray[1]);

  return seconds + minutes * 60;
};

const Player = ({
  duration,
  ramdomIdFromArtist,
  ramdomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${ramdomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />
        <Link to={`/song/${ramdomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio} />
    </div>
  );
};

export default Player;
