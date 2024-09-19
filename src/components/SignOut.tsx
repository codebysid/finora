import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/utils/auth";
import { LogOut } from "lucide-react";

function SignOut() {
  const signOutAction = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };
  return (
    <form action={signOutAction}>
      <Button variant="link">
        <LogOut />
      </Button>
    </form>
  );
}

export default SignOut;
