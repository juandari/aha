// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Item = {
  id: number
  imageUrl: string
  title: string
  username: string
}

function generateMockData(): Item[] {
  let result: Item[] = []

  for (let i = 0; i < 100; i++) {
    result.push({
      id: i + 1,
      imageUrl: `https://picsum.photos/id/${i}/335/222`,
      title: 'This is a title',
      username: 'username',
    })
  }

  return result
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  const { page, limit } = req.query
  const mockData = generateMockData()
  const noOfPages = Math.ceil(mockData.length / +limit)
  const chunks = []

  for (let i = 0; i < mockData.length; i += +limit) {
    const tempArray = mockData.slice(i, i + +limit)
    chunks.push(tempArray)
  }

  if (!page || !limit) {
    res.status(200).json(mockData)
  }

  if (+page >= noOfPages) {
    res.status(200).json([])
  } else {
    res.status(200).json(chunks[+page])
  }
}
