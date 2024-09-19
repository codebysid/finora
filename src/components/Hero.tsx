import React from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-5 grid-background">
      <h2 className="flex flex-col justify-center items-center gap-2 text-4xl lg:text-8xl font-extrabold text-left">
        <span>Manage your</span>
        <span> expenses smoothly</span>
      </h2>
      <LoginButton />
    </div>
  );
}

export default Hero;
