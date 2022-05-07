import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

// NextAuth に渡すオプション
const options = {
  // 認証プロバイダー
  providers: [
    CredentialsProvider({
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
      name: '新規登録',
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
  ],
  secret: process.env.AUTH_SECRET,
}

export default (req, res) => NextAuth(req, res, options)