import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

// NextAuth に渡すオプション
const options = {
  // 認証プロバイダー
  providers: [
    CredentialsProvider({
      id: "signIn",
      name: 'ログイン',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        return ({
          name:"test"
        })
      }
    }),
    CredentialsProvider({
      id: "signUp",
      name: '新規登録',
      async authorize(credentials, req) {
        const result = await axios.get('http://localhost:3001/api/find/1')
        console.log("kita")
        console.log(result.data)
        return (null)
      },
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
}

export default (req, res) => NextAuth(req, res, options)