import "./App.css";
import Clock from "./Component/Clock";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const timeNewDate = new Date();
  const [currentTime, setcurrentTime] = useState(
    `${timeNewDate.getHours()}:${timeNewDate.getMinutes()}:${timeNewDate.getSeconds()}`
  );
  useEffect(() => {
    const timer = window.setInterval(() => {
      const newerTime = new Date();
      setcurrentTime(
        `${newerTime.getHours()}:${newerTime.getMinutes()}:${newerTime.getSeconds()}`
      );
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Clock time={currentTime} />
    </div>
  );
}

export default App;
