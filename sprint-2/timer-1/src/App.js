import Timer from "./components/Timer";
import "./App.css";
import React from "react";

function App() {
  const [show, setShow] = React.useState(true);

  return (
    <div className="App">
      {show ? <Timer /> : null}
      <button onClick={() => setShow((prev) => !prev)}>toggle</button>
    </div>
  );
}

export default App;
