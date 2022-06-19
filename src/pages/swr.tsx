import { useTheme } from 'next-themes'
import Head from 'next/head'
import useSWR from 'swr'
import Marquee from 'react-fast-marquee'

export function useUser() {
  return useSWR('/api/hello')
}

const SWR = () => {
  const { data } = useUser()
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Head>
        <title>SWR</title>
      </Head>
      <div>
        <div>{data && data.name}</div>
        {/* //theme */}
        <div>
          <button onClick={() => setTheme('light')}>Light Mode</button>
        </div>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <div>
        <Marquee direction={'right'} gradient={false} loop={1}>
          <div>
            <img src='/img/g1.jpg' alt='da' width='300px' />
          </div>
          <div>
            <img src='/img/g2.jpg' alt='da' width='300px' />
          </div>
          <div>
            <img src='/img/g1.jpg' alt='da' width='300px' />
          </div>
          <div>
            <img src='/img/g2.jpg' alt='da' width='300px' />
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default SWR
