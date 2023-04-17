import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { providers } from "next-auth/react";
import  "../../../styles/sign-in.css"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "../../signin"
  }
});
