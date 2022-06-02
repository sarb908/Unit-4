import "./App.css";
import { AuthContextPovider } from "./components/Store/Auth-context";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./components/Store/ThemeContext";
import { useContext } from "react";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <>
        <AuthContextPovider>
          <Navbar />
          <Body />
        </AuthContextPovider>
      </>
    </div>
  );
}

export default App;
