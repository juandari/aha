import useSWR from 'swr'

export default function useFriends() {
  const { data, error } = useSWR('/api/friends')

  return {
    friends: data,
    isLoading: !error && !data,
    isError: error,
  }
}
