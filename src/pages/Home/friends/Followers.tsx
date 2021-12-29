import useUsers from '@hooks/useUsers'
import Users from './Users'

export default function Following() {
  const { users, isError, isLoading } = useUsers()

  return <Users data={users} isError={isError} isLoading={isLoading} />
}
