import wr from '@/helpers/WebResponse'
import Request from './model'
import { r_delete, r_get, r_getDetail, r_store, r_update } from './repository'

export async function s_get() {
  try {
    const result = await r_get()
    if('error' in result) return wr(500, `Opss something's wrong!`, result)
    return wr(200, `Get data special invite success`, result)
  } catch (error: any) {
    return wr(500, `Opss something's wrong!`, error)
  }
}

export async function s_getDetail(id: number) {
  try {
    const result = await r_getDetail(id)
    if('error' in result) return wr(500, `Opss something's wrong!`, result)
    return wr(200, `Get data special invite with id ${id} success`, result)
  } catch (error: any) {
    return wr(500, `Opss something's wrong!`, error)
  }
}

export async function s_store(req: Request) {
  try {
    const result = await r_store(req)
    if('error' in result) return wr(500, `Opss something's wrong!`, result)
    return wr(200, `Insert data special invite success`, result)
  } catch (error: any) {
    return wr(500, `Opss something's wrong!`, error)
  }
}
export async function s_update(req: Request, id: number) {
  try {
    const result = await r_update(req, id)
    if('error' in result) return wr(500, `Opss something's wrong!`, result)
    return wr(200, `Update data special invite with id ${id} success`, result)
  } catch (error: any) {
    return wr(500, `Opss something's wrong!`, error)
  }
}

export async function s_remove(id: number) {
  try {
    const result = await r_delete(id)
    if('error' in result) return wr(500, `Opss something's wrong!`, result)
    return wr(200, 'Delete data special invite success', result)
  } catch (error: any) {
    return wr(500, `Opss something's wrong!`, error)
  }
}