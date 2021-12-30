// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Tag = {
  id: number
  title: string
  subtitle: string
  noOfQuestions: number
}

const mockData = [
  {
    id: 1,
    title: 'Cool',
    subtitle: 'Hard',
    noOfQuestions: 350,
  },
  {
    id: 2,
    title: 'Beautiful',
    subtitle: 'Medium',
    noOfQuestions: 210,
  },
  {
    id: 3,
    title: 'Easy',
    subtitle: 'Easy',
    noOfQuestions: 190,
  },
  {
    id: 4,
    title: 'Summary',
    subtitle: 'Summary',
    noOfQuestions: 105,
  },
  {
    id: 5,
    title: 'Hot',
    subtitle: 'Hot',
    noOfQuestions: 80,
  },
  {
    id: 6,
    title: 'Passage Specific',
    subtitle: 'Passage Specific',
    noOfQuestions: 50,
  },
  {
    id: 7,
    title: 'Summary',
    subtitle: 'Summary',
    noOfQuestions: 105,
  },
  {
    id: 8,
    title: 'Hot',
    subtitle: 'Hot',
    noOfQuestions: 80,
  },
  {
    id: 9,
    title: 'Passage Specific',
    subtitle: 'Passage Specific',
    noOfQuestions: 50,
  },
]

for (let i = 10; i < 30; i++) {
  mockData.push({
    id: i,
    title: 'Tag',
    subtitle: 'Tag',
    noOfQuestions: 50,
  })
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tag[]>
) {
  res.status(200).json(mockData)
}
