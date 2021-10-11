import React, { useRef } from "react";
import FancyInput from "./components/FancyInput";
import "./App.css";

const App = () => {
  const date = new Date();
  const fancyInputRef = useRef();
  const focusInput = (val) => {
    console.log(val);

    fancyInputRef.current.focus(val);
    fancyInputRef.current.countMax();

    console.log(fancyInputRef.current);
  };
  return (
    <div className="App">
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => focusInput(date.getDay())}>Click</button>
    </div>
  );
};

export default App;
