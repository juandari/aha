import '../src/assets/css/fonts.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, theme } from '@theme'
import CssBaseline from '@mui/material/CssBaseline'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
