import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Timer /> : <StopWatch />}
      <button onClick={() => setShow((prev) => !prev)}>
        {" "}
        Toggle between Timer and StopWatch
      </button>
    </div>
  );
}

export default App;
