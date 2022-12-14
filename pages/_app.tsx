import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/index';
import { SessionProvider } from 'next-auth/react';
import { ResponsiveAppBar } from "../components/Menu"

import Footer2 from '../components/footer2'
import Footer from '../components/footer'



function MyApp({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider session={pageProps.session}>
              <ResponsiveAppBar />

      <Component {...pageProps} />

      <Footer2 />
      <Footer />
  </SessionProvider>

  )
}

export default wrapper.withRedux(MyApp);
