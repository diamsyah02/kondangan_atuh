import type { NextApiRequest, NextApiResponse } from 'next'
import wr from '@/helpers/WebResponse'
import { s_login, s_register } from './service'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
		query: { action },
		method,
    body
	} = req

  if(method == 'POST') {
    switch (action) {
      case "login":
        try {
          const result = await s_login(body)
          return res.status(Number(result?.statusCode)).json(result)
        } catch (error) {
          console.log(error)
          return res.status(404).json(wr(404, 'Not Found', []))
        }
      case "register":
        try {
          const result = await s_register(body)
          return res.status(Number(result?.statusCode)).json(result)
        } catch (error) {
          return res.status(404).json(wr(404, 'Not Found', []))
        }
      default:
        return res.status(405).json(wr(405, `Method ${method} Not Allowed`, []))
    }
  } else {
    return res.status(405).json(wr(405, `Method ${method} Not Allowed`, []))
  }
}
