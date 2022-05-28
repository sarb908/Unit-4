import React, { useRef, useState } from "react";

const Timer = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(null);
  const inputVal = useRef();

  React.useEffect(() => {
    if (value <= 0) {
      clearInterval(time);
      setTime(null);
    }
  }, [value, time]);

  const startHandler = () => {
    if (!value) {
      return;
    }
    if (!time) {
      let id = setInterval(() => {
        setValue((prev) => prev - 1);
      }, 1000);
      setTime(id);
      inputVal.current.value = null;
    }
  };
  const pauseHandler = () => {
    clearInterval(time);
    setTime(null);
  };
  const resetHandler = () => {
    clearInterval(time);
    setTime(null);

    setValue(0);
  };

  return (
    <div>
      <h1>TIMER : {value}</h1>
      <input
        placeholder="seconds..."
        type="number"
        ref={inputVal}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={startHandler}>start</button>
      <button onClick={pauseHandler}>pause</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
};

export default Timer;
