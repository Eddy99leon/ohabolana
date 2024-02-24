import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import connect from "@/lib/utils"
import { User } from "@/lib/models"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // callback({
    //   async signIn(user, account, profil) {
    //     if(account.provider === "github"){
    //       connect();
    //       try{

    //       }catch(err){

    //       }
    //     }
    //   }
    // }),
    CredentialsProvider({
      id:"credentials",
      name: "Credentials",
      async authorize(credentials){
        await connect()
        try{
          const user = await User.findOne({ email: credentials.email })
          if(user){
            //check password
            const isPassswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )
            if(isPassswordCorrect){
              return user
            }else{
              throw new Error("Mot de pass incorrect !")
            }
          }else{
            throw new Error("Utilisateur non trouver!")
          }
        }catch(err){
          throw new Error(err)
        }
      }
    })
  ],
  pages: {
    error:"/profil/login"
  }
})

export { handler as GET, handler as POST };