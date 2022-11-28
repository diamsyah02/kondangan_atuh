import Request from './model'
import excuteQuery from '@/lib/db'

const table: string = `special_invite`

export async function r_get() {
  try {
    return await excuteQuery(`SELECT * FROM ${table}`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function r_getDetail(id: number) {
  try {
    return await excuteQuery(`SELECT * FROM ${table} WHERE id = ${id}`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function r_store(req: Request) {
  try {
    const { id_invitation, list } = req
    return await excuteQuery(`INSERT INTO ${table} (id_invitation, list) VALUES (${id_invitation}, '${list}')`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}
export async function r_update(req: Request, id: number) {
  try {
    const { id_invitation, list } = req
    return await excuteQuery(`UPDATE ${table} SET id_invitation = ${id_invitation}, list = '${list}' WHERE id = ${id}`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function r_delete(id: number) {
  try {
    return await excuteQuery(`DELETE FROM ${table} WHERE id = ${id}`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}