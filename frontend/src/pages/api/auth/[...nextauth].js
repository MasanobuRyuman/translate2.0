import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const apiURL = 'https://translatestudy.herokuapp.com'

const options = {
  providers: [
    CredentialsProvider({
      id: 'signIn',
      name: 'existing account',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const username = credentials.username
        const password = credentials.password
        const result = await axios.post(`${apiURL}/api/signIn`, {
          data: { username: username, password: password },
        })
        if (result.data.success == true) {
          return result.data.userData
        }
        return null
      },
    }),
    CredentialsProvider({
      id: 'signUp',
      name: 'new Account',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const username = credentials.username
        const password = credentials.password
        const result = await axios.post(`${apiURL}/api/signUp`, {
          data: { username: username, password: password },
        })
        if (result.data.success == true) {
          return result.data.userData
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.userData = token.user
      return session
    },
  },
}

export default (req, res) => NextAuth(req, res, options)
