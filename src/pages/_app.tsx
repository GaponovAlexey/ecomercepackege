import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
