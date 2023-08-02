import React, { Fragment, useState } from 'react';

let TIMER;

function Solution() {
  const [count, setCount] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [togglePause, setTogglePause] = useState(true);
  const [toggleStarted, setToggleStarted] = useState(false);

  const handleClickStart = () => {
    if (toggleStarted) {
      alert('already started');
      return;
    }
      
    // if (count === 0)
    //   return;

    setCount(parseInt(minutes) * 60 + parseInt(seconds));
    resetInterval();
    startInterval();
    setToggleStarted(true);
  };

  const handleClickPauseResume = () => {
    if (togglePause) {
      resetInterval();
      setTogglePause(false);
    } else {
      startInterval();
      setTogglePause(true);
    }
  };

  const handleClickReset = () => {
    resetInterval();
    setCount(0);
    setMinutes(0);
    setSeconds(0);
    setToggleStarted(false);
  };

  const startInterval = () => {
    TIMER = setInterval(() => {
      setCount(val => {
        if (val === 0) {
          resetInterval();
          setCount(0);
          setMinutes(0);
          setSeconds(0);
          setToggleStarted(false);
          return 0;
        } else {
          return val - 1;
        }
      });
    }, 1000);
  };

  const resetInterval = () => {
    clearInterval(TIMER);
    TIMER = null;
  };

  const handleChangeMinutes = evt => {
    const value = evt.target.value;
    if (!value) {
      // setCount(seconds);
      setMinutes('');
      return;
    }

    // setCount(parseInt(value) * 60 + parseInt(seconds));
    setMinutes(value);
  };

  const handleChangeSeconds = evt => {
    const value = evt.target.value;
    if (!value) {
      // setCount(minutes * 60);
      setSeconds('');
    }
    // setCount(parseInt(minutes) * 60 + parseInt(value));
    setSeconds(value);
  };

  const convertCount = () => {
    if (!count) {
      return <>00:00</>;
    }

    let min = parseInt(count / 60);
    let sec = count % 60;
    
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    return (<>{min}:{sec}</>);
  };

  return (
    <Fragment>
      <label>
        <input type="number" value={minutes} onChange={handleChangeMinutes} />
        Minutes
      </label>
      <label>
        <input type="number" value={seconds} onChange={handleChangeSeconds} />
        Seconds
      </label>

      <button onClick={handleClickStart}>START</button>
      <button onClick={handleClickPauseResume}>PAUSE / RESUME</button>
      <button onClick={handleClickReset}>RESET</button>

      <h1 data-testid="running-clock">{convertCount()}</h1>
    </Fragment>
  );
}

export default Solution;
