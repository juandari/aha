import useFriends from '@hooks/useFriends'
import Users from './Users'

export default function Following() {
  const { friends, isError, isLoading } = useFriends()

  return <Users data={friends} isError={isError} isLoading={isLoading} />
}
