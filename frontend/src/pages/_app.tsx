import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import * as React from 'react'
import createEmotionCache from '../createEmotionCache'
import theme from '../theme'
import Head from 'next/head'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Head>
          <title>{'Translate2.0'}</title>
          <meta property='og:title' content='translate2.0' />
          <meta
            property='og:description'
            content='英語の翻訳から学習までを一貫してサポートします'
          />
          <meta name='keywords' content='translate2.0' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://translate2-0.vercel.app/' />
          <meta property='og:image' content='https://translate2-0.vercel.app/OGPImage.png' />
          <meta property='og:site_name' content='translate2.0' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:url' content='https://translate2-0.vercel.app/' />z
          <meta name='twitter:title' content='translate2.0' />
          <meta
            name='twitter:description'
            content='英語の翻訳から学習までを一貫してサポートします'
          />
          <meta name='twitter:image' content='https://translate2-0.vercel.app/OGPImage.png' />
          <link rel='canonical' href='https://translate2-0.vercel.app/' />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
