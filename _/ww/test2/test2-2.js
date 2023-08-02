import React, { Fragment, useState } from 'react';

let timer;

function Solution() {
  const [count, setCount] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [togglePause, setTogglePause] = useState(true);

  const handleChangeMinutes = evt => {
    const value = parseInt(evt.target.value);

    if (!value) {
      setCount(seconds);
      setMinutes('');
      return;
    }

    setCount(value * 60 + seconds);
    setMinutes(value);
  };

  const handleChangeSeconds = evt => {
    const value = parseInt(evt.target.value);

    if (!value) {
      setCount(minutes);
      setSeconds('');
      return;
    }

    setCount(minutes * 60 + value);
    setSeconds(Number(value));
  };

  const handleClickStart = () => {
    if (count === 0) {
      alert('please input numbers');
    }

    resetInterval();
    setCount(minutes * 60 + seconds);
    startInterval();
  };

  const handleClickPauseResume = () => {
    if (togglePause) {
      // Pause
      resetInterval();
      setTogglePause(false);
    } else {
      // Resume
      startInterval();
      setTogglePause(true);
    }
  };

  const handleClickReset = () => {
    resetInterval();
    setCount(0);
    setMinutes(0);
    setSeconds(0);
  };

  const startInterval = () => {
    timer = setInterval(() => {
      setCount(val => {
        if (val === 0) {
          resetInterval();
          setCount(0);
          // setMinutes(0);
          // setSeconds(0);
          return 0;
        } else {
          return val - 1;
        }
      });
    }, 1000);
  };

  const resetInterval = () => {
    clearInterval(timer);
    timer = null;
  };

  const renderCount = () => {
    if (count === 0) return <>00:00</>;

    let min = parseInt(count / 60);
    let sec = count % 60;

    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return (
      <>
        {min.toString()}:{sec.toString()}
      </>
    );
    // return (<>{count > 0 && `${min}:${sec}`}</>);
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

      <h1 data-testid="running-clock">{renderCount()}</h1>
    </Fragment>
  );
}

export default Solution;
