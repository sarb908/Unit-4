import React, { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  //   const [id, setid] = useState(null);
  const id = useRef();
  console.log(id);
  React.useEffect(() => {
    return () => {
      clearInterval(id.current);
      id.current = null;
      console.log("useeffect");
    };
  }, []);

  const start = () => {
    if (!id.current) {
      let ids = setInterval(() => {
        setTimer((prev) => prev + 100);
      }, 100);
      id.current = ids;
    }
  };

  const stop = () => {
    clearInterval(id.current);
    id.current = null;
  };
  const reset = () => {
    clearInterval(id.current);
    setTimer(0);
    id.current = null;
  };

  return (
    <div>
      <h2>countDownTimer</h2>
      <div>{timer}</div>
      <button onClick={() => start()}>start</button>
      <button onClick={() => stop()}>stop</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};

export default Timer;
