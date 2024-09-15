import React from "react";
import Logo from "./Logo";
import SignOut from "./SignOut";

function TopBar() {
  return (
    <div className=" flex flex-row justify-between items-center">
      <Logo />
      <SignOut />
    </div>
  );
}

export default TopBar;
