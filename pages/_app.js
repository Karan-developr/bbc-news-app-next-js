import '../styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import Head from 'next/head';
import Header from '@/components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}
