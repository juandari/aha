import type { NextApiRequest, NextApiResponse } from 'next'
import users from 'mock/user'

const friends = users.filter((user) => user.isFollowing)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  res.status(200).json(friends)
}
