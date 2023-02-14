// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { getAllPostQuery } from '../../../utils/queries'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const query = getAllPostQuery()

    const data = await client.fetch(query)

    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const doc = req.body
    // console.log(doc)

    client.create(doc).then(() => {
      res.status(200).json('video created')
    })
  }
}
