import Todo from "./components/Todo";
import "./App.css";
import imgs from "./assets/tower.png";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imgs})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Todo />
    </div>
  );
}

export default App;
