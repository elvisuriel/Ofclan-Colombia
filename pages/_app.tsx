<<<<<<< HEAD
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
=======
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
>>>>>>> 1f6200a577589790a4dfb53472758544a7b282d1
