import React, { useRef } from "react";
import FancyInput from "./components/FancyInput";
import "./App.css";

const App = () => {
  const fancyInputRef = useRef();
  const focusInput = () => {
    fancyInputRef.current.focus();
  };
  return (
    <div className="App">
      <FancyInput ref={fancyInputRef} />
      <button onClick={focusInput}>Click</button>
    </div>
  );
};

export default App;
