import Head from 'next/head'
import useSWR from 'swr'

export function useUser() {
  return useSWR('/api/hello')
}

const SWR = () => {
  const { data } = useUser()
  return (
    <>
      <Head>
        <title>SWR</title>
      </Head>
      <div>{data && data.name}</div>
    </>
  )
}

export default SWR
