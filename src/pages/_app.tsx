import '../../styles/globals.css'
import '../../styles/Card.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { SWRConfig } from 'swr'
import { ThemeProvider } from 'next-themes'

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
