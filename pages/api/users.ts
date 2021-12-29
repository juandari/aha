import type { NextApiRequest, NextApiResponse } from 'next'
import users from 'mock/user'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  res.status(200).json(users)
}
