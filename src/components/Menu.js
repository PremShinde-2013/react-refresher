import React from "react";
import ChangeProfile from "./ChangeProfile";

const Menu = (props) => {
  return (
    <div>
      username : {props.userName}{" "}
      <ChangeProfile setUserName={props.setUserName} />
    </div>
  );
};

export default Menu;
