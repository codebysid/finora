import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectToMongo from "./connectToMongo";
import User from "@/models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      console.log("callback hu mai", user);
      if (!user.email) {
        return false;
      }
      await connectToMongo();
      const userDb = await User.findOne({ email: user.email });
      if (userDb) return true;
      const res = await User.create({
        email: user.email,
        name: user.name || "",
      });
      console.log({ res });
      if (res) return true;
      return false;
    },
  },
});
