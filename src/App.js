import { useState } from "react";
import "./App.css";

function App() {
  const time = new Date().toLocaleTimeString();
  const [ctime, setCTime] = useState(time);
  const UpdateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <div className="App">
      <h3>{ctime}</h3>
    </div>
  );
}

export default App;
