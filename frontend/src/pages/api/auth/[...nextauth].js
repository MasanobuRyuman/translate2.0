import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// NextAuth.js関数に渡すオプション
const options = {
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      // NextAuthの認証関数。credentialsにログイン情報が格納される。
      authorize: async credentials => {
        if (
          // ログインID・パスワードは環境変数にて設定する。
          credentials.login === process.env.NEXT_PUBLIC_LOGIN_ID &&
          credentials.password === process.env.NEXT_PUBLIC_PASSWORD
        ) {
          // ログイン成功後ユーザー情報を返却する。値はsessionに格納される。
          return Promise.resolve({ name: 'admin' })
        } else {
          // ログイン失敗後認証を拒否し、エラーメッセージを返却する。
          return Promise.resolve(null)
        }
      },
    }),
  ],
  // ログインページを指定する。今回はトップページのため'/'を指定。
  pages: {
    signIn: '/',
  },
}

export default (req, res) => NextAuth(req, res, options)