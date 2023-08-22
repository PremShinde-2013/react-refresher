import "./App.css";

import { useState, useEffect } from "react";
import Text from "./Text";

function App() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return (
    <div className='App'>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
