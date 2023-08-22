import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [catFact, setCatFact] = useState("");

  // old method

  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className='App'>
      <button onClick={fetchCatFact}>Generate Cat Facts</button>
      <p>{catFact} </p>
    </div>
  );
}

export default App;
