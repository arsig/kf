import '@styles/main.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '@components/Layout/Layout'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <title>KofaToken | Bep20 Token Based on BSC Network</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
