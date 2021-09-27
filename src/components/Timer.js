import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";


const formatRemainingTime = time => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const computedSeconds =
  String(seconds).length === 1
    ? `0${seconds}`
    : seconds;
const computedMinnutes =
  String(minutes).length === 1
    ? `0${minutes}`
    : minutes;

  return `${computedMinnutes}:${computedSeconds}`;
};

const timerProps = {
  size: 400,
  strokeWidth: 27,
};

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="remaining-time">remaining time</div>
      <div className="time">{formatRemainingTime(remainingTime)}</div>
    </div>
  );
};

export function TimerTwoSection() {
  const [status, setStatus] = useState(false);

  function startPlay() {
    setStatus((prevStatus) => {
      return !prevStatus;
    });
  }

  return (
    <div className="Timer">
      <div class="time-container">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={120}
        trailColor={"white"}
        colors={"#D4B445"}
        onComplete={() => [false]}
      >
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button class="start" onClick={startPlay}>
        <i className={status ? 'fas fa-pause' : 'fas fa-play'}/>
      </button>
    </div>
  );
}

export function TimerThreeSection() {
  const [status, setStatus] = useState(false);

  function startPlay() {
    setStatus((prevStatus) => {
      return !prevStatus;
    });
  }

  return (
    <div className="Timer">
      <div class="time-container">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={180}
        trailColor={"white"}
        colors={"#D4B445"}
        onComplete={() => [false]}
      >
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button class="start" onClick={startPlay}>
        <i className={status ? 'fas fa-pause' : 'fas fa-play'}/>
      </button>
    </div>
  );
}

export function TimerFourSection() {
  const [status, setStatus] = useState(false);

  function startPlay() {
    setStatus((prevStatus) => {
      return !prevStatus;
    });
  }

  return (
    <div className="Timer">
      <div class="time-container">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={240}
        trailColor={"white"}
        colors={"#D4B445"}
        onComplete={() => [false]}
      >
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button class="start" onClick={startPlay}>
        <i className={status ? 'fas fa-pause' : 'fas fa-play'}/>
      </button>
    </div>
  );
}

export default function TimerFiveSection() {
  const [status, setStatus] = useState(false);

  function startPlay() {
    setStatus((prevStatus) => {
      return !prevStatus;
    });
  }
  return (
    <div className="Timer">
      <div class="time-container">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={300}
        trailColor={"white"}
        colors={"#D4B445"}
        onComplete={() => [false]}
      >
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button class="start" onClick={startPlay}>
        <i className={status ? 'fas fa-pause' : 'fas fa-play'}/>
      </button>
    </div>
  );
}

export function TimerSixSection() {
  const [status, setStatus] = useState(false);

  function startPlay() {
    setStatus((prevStatus) => {
      return !prevStatus;
    });
  }

  return (
    <div className="Timer">
      <div class="time-container">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={360}
        trailColor={"white"}
        colors={"#D4B445"}
        onComplete={() => [false]}
      >
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button class="start" onClick={startPlay}>
        <i className={status ? 'fas fa-pause' : 'fas fa-play'}/>
      </button>
    </div>
  );
}

export function TimerSevenSection() {
  const [status, setStatus] = useState(false);

  function startPlay() {
    setStatus((prevStatus) => {
      return !prevStatus;
    });
  }

  return (
    <div className="Timer">
      <div class="time-container">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={420}
        trailColor={"white"}
        colors={"#D4B445"}
        onComplete={() => [false]}
      >
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button class="start" onClick={startPlay}>
        <i className={status ? 'fas fa-pause' : 'fas fa-play'}/>
      </button>
    </div>
  );
}

export function TimerNineSection() {
  const [status, setStatus] = useState(false);

  function startPlay() {
    setStatus((prevStatus) => {
      return !prevStatus;
    });
  }

  return (
    <div className="Timer">
      <div class="time-container">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={540}
        trailColor={"white"}
        colors={"#D4B445"}
        onComplete={() => [false]}
      >
        {renderTime}
      </CountdownCircleTimer>
      </div>
      <button class="start" onClick={startPlay}>
        <i className={status ? 'fas fa-pause' : 'fas fa-play'}/>
      </button>
    </div>
  );
}