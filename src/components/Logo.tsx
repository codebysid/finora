import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <h1 className=" text-6xl lg:text-8xl font-extrabold md:text-4xl pl-2 pt-2 textGradientAnimation">
        Finora
      </h1>
    </Link>
  );
}

export default Logo;
