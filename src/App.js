import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  //  1st ***************
  // const [catFact, setCatFact] = useState("");

  // old method

  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // };
  // useEffect(() => {
  //   fetchCatFact();
  // }, []);

  // ***********   2nd api ***************
  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(null);
  // const fetchData = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictedAge(res.data);
  //   });
  // };

  //  3rd **************
  const [generatedExcues, setGeneratedExcues] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        console.log(res.data);
        setGeneratedExcues(res.data[0].excuse);
      }
    );
  };
  return (
    <div className='App'>
      {/* 1st *************** */}
      {/* <button onClick={fetchCatFact}>Generate Cat Facts</button>
      <p>{catFact} </p> */}

      {/* *****************   2nd api  **************/}
      {/* <input
        placeholder='eg. Prem'
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name : {predictedAge?.name}</h1>
      <h1>Predicted Age : {predictedAge?.age}</h1>
      <h1> Count : {predictedAge?.count}</h1> */}

      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>family</button>
      <button onClick={() => fetchExcuse("office")}>office</button>
      <p>{generatedExcues}</p>
    </div>
  );
}

export default App;
