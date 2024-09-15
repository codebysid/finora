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
    <div>
      <form action={signOutAction}>
        <Button type="submit" size="sm" variant="ghost">
          <LogOut />
        </Button>
      </form>
    </div>
  );
}

export default SignOut;
