import React from "react";
import { Button } from "./ui/button";
import { signIn } from "../utils/auth";

function LoginButton() {
  const signInAction = async () => {
    "use server";
    await signIn("google", { redirectTo: "/dash" });
  };

  return (
    <form action={signInAction}>
      <Button type="submit" size="lg" variant="secondary">
        Login with Google
      </Button>
    </form>
  );
}

export default LoginButton;
