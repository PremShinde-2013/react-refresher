import React, { useContext } from "react";
import { AppContext } from "../App";

// const Home = (props) => {
//   return <div>username : {props.userName}</div>;
// };
const Home = () => {
  const { userName } = useContext(AppContext);
  return <div>username : {userName}</div>;
};

export default Home;
