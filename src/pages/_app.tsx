import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@themes/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
