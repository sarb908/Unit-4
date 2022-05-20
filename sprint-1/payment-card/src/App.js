import "./App.css";
import Card from "./components/Card";
import amazonPng from "./assets/amazon.png";
import applePng from "./assets/apple.png";
const data = [
  {
    date: "28 / 10 / 2020",
    logo: amazonPng,
    heading: "Amazon Gift",
    subheading: "Pay",
    devices: "Desktop - Mobile",
    color: "#ffa500",
  },
  {
    date: "17 Sep 2020",
    logo: applePng,
    heading: "Apple Gift",
    subheading: "Payment",
    devices: "MacOS - Mobile",
    color: "#f5f5f5",
  },
  {
    date: "28 / 10 / 2020",
    logo: amazonPng,
    heading: "Amazon Gift",
    subheading: "Pay",
    devices: "Desktop - Mobile",
    color: "#ffa500",
  },
];
function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
}

export default App;
