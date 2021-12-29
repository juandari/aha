import useSWR from 'swr'

export default function useTags() {
  const { data, error } = useSWR('/api/tags')

  return {
    tags: data,
    isLoading: !error && !data,
    isError: error,
  }
}
