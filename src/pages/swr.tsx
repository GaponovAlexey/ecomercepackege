import useSWR from 'swr'

const SWR = () => {
  const { data, error } = useSWR('/api/hello')
  return <div>{data && data.name}</div>
}

export default SWR

