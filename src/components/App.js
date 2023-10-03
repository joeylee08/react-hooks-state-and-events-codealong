import React, {useState} from "react";
import Toggle from "./Toggle";

function App() {
  const [isOn, setOnOff] = useState("OFF")

  function handleClick(event) {
    setOnOff(isOn === 'OFF' ? 'ON' : 'OFF')
  }
    
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle handleClick={handleClick} isOn={isOn}/>
    </div>
  );
}

export default App;
