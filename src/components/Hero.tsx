import React from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-5">
      <Logo />
      <p className="text-center lg:text-xl">
        Finora helps you track expenses, set budgets, and achieve your financial
        goals with ease
      </p>
      <LoginButton />
    </div>
  );
}

export default Hero;
