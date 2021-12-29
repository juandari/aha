import useSWR from 'swr'

export default function useUsers() {
  const { data, error } = useSWR('/api/users')

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  }
}
