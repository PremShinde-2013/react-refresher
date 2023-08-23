import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState("");
  const { setUserName } = useContext(AppContext);

  return (
    // <div>
    //   <input
    //     onChange={(event) => {
    //       setNewUsername(event.target.value);
    //     }}
    //   />
    //   <button
    //     onClick={() => {
    //       props.setUserName(newUsername);
    //     }}
    //   >
    //     Change Username
    //   </button>
    // </div>
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeProfile;
