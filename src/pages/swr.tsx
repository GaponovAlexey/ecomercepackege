import Head from 'next/head'
import useSWR from 'swr'
import MainPageTwo from '../components/MainPageTwo'
export function useUser() {
  return useSWR('/api/hello')
}

const SWR = () => {
  const { data } = useUser()

  
  return (
    <>
      <Head>
        <title>two</title>
      </Head>
      <div>
        <div>{data && data.name}</div>
        <MainPageTwo />
      </div>
    </>
  )
}

export default SWR
