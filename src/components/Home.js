import React, { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

// const Home = (props) => {
//   return <div>username : {props.userName}</div>;
// };
const Home = () => {
  const { data, isLoading, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const { userName } = useContext(AppContext);
  if (isLoading) {
    return <h1>Loding...</h1>;
  }
  return (
    <>
      <div>username : {userName}</div>
      <p>{data?.fact}</p>
      <button
        onClick={() => {
          refetch();
        }}
      >
        Update
      </button>
    </>
  );
};

export default Home;
