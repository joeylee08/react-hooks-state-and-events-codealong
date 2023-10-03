import React from "react";

function Toggle({isOn, handleClick}) {
  return <button onClick={handleClick}>{isOn}</button>;
}

export default Toggle;
