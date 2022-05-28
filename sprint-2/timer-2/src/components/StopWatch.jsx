import React, { useRef, useState } from "react";

function msToTime(duration) {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

const StopWatch = () => {
  const [timer, setTimer] = useState(1000);
  const id = useRef();
  React.useEffect(() => {
    clearInterval(id.current);
    setTimer(0);
    id.current = null;
  }, []);

  const startHandler = () => {
    if (!id.current) {
      let ids = setInterval(() => {
        setTimer((prev) => prev + 1000);
      }, 10);
      id.current = ids;
    }
  };
  const stopHandler = () => {
    clearInterval(id.current);
    id.current = null;
  };
  const resetHandler = () => {
    clearInterval(id.current);
    setTimer(0);
    id.current = null;
  };
  return (
    <div>
      <h1> StopWatch : {msToTime(timer)}</h1>
      <button onClick={startHandler}>start</button>
      <button onClick={stopHandler}>stop</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
};

export default StopWatch;
