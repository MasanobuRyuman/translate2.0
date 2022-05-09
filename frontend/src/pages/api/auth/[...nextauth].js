import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

// NextAuth に渡すオプション
const options = {
  // 認証プロバイダー
  providers: [
    CredentialsProvider({
      id: 'signIn',
      name: 'ログイン',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const username = credentials.username
        const password = credentials.password
        const result = await axios.post('http://localhost:3001/api/signIn', {
          data: { username: username, password: password },
        })
        console.log(result.data.userData)
        if (result.data.success == true) {
          return result.data.userData
        }
      },
    }),
    CredentialsProvider({
      id: 'signUp',
      name: '新規登録',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const username = credentials.username
        const password = credentials.password
        const result = await axios.post('http://localhost:3001/api/signUp', {
          data: { username: username, password: password },
        })
        if (result.data.success == true) {
          return result.data.userData
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    },
  },
}

export default (req, res) => NextAuth(req, res, options)
