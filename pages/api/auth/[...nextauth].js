


import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers/auth0"

import GoogleProvider from "next-auth/providers/google";

import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from "next-auth/providers/facebook";



export default NextAuth({
    
    providers: [
      
      GitHubProvider({
        clientId:process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET,
        
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      })
    


    ],
    secret: process.env.JWT_SECRET,
    
})



