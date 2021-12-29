import '../src/assets/css/fonts.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, theme } from '@theme'
import CssBaseline from '@mui/material/CssBaseline'
import { SWRConfig } from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
