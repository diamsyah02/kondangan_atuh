import wr from '@/helpers/WebResponse'
import Request from './model'
import { r_delete, r_get, r_getDetail, r_store, r_update } from './repository'

export async function s_get() {
  try {
    const result = await r_get()
    return wr(200, `Get data invitation success`, result)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function s_getDetail(id: number) {
  try {
    const result = await r_getDetail(id)
    return wr(200, `Get data invitation with id ${id} success`, result)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function s_store(req: Request) {
  try {
    const result = await r_store(req)
    return wr(200, `Insert data invitation success`, result)
  } catch (error: any) {
    console.log(error)
    return error
  }
}
export async function s_update(req: Request, id: number) {
  try {
    const result = await r_update(req, id)
    return wr(200, `Update data invitation with id ${id} success`, result)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function s_remove(id: number) {
  try {
    const result = await r_delete(id)
    return wr(200, 'Delete data invitation success', result)
  } catch (error: any) {
    console.log(error)
    return error
  }
}