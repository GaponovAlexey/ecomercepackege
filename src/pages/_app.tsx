import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import '../../styles/Card.css'
import '../../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  return (
    <ThemeProvider>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default MyApp
