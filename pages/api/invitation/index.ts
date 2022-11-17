import type { NextApiRequest, NextApiResponse } from 'next'
import wr from '@/helpers/WebResponse'
import { s_get, s_getDetail, s_remove, s_store, s_update } from './service'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
		query: { id },
		method,
    body
	} = req

	switch (method) {
		case "GET":
			try {
				const result = (id) ? await s_getDetail(Number(id)): await s_get()
				return res.status(Number(result?.statusCode)).json(result)
			} catch (error) {
				return res.status(404).json(wr(404, 'Not Found', []))
			}
    case "POST":
      try {
				const result = await s_store(body)
				return res.status(Number(result?.statusCode)).json(result)
			} catch (error) {
				return res.status(404).json(wr(404, 'Not Found', []))
			}
		case "PUT":
			try {
				const result = await s_update(body, Number(id))
				return res.status(Number(result?.statusCode)).json(result)
			} catch (error) {
				return res.status(404).json(wr(404, 'Not Found', []))
			}
		case "DELETE":
			try {
				const result = await s_remove(Number(id))
				return res.status(Number(result?.statusCode)).json(result)
			} catch (error) {
				return res.status(404).json(wr(404, 'Not Found', []))
			}
		default:
			return res.status(405).json(wr(405, `Method ${method} Not Allowed`, []))
	}
}
