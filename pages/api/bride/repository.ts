import Request from './model'
import excuteQuery from '@/lib/db'

const table: string = `bride`

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
    const { id_invitation, man, woman, parent_man, parent_woman } = req
    return await excuteQuery(`INSERT INTO ${table} (id_invitation, man, woman, parent_man, parent_woman) VALUES (${id_invitation}, '${man}', '${woman}', '${parent_man}', '${parent_woman}')`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}
export async function r_update(req: Request, id: number) {
  try {
    const { id_invitation, man, woman, parent_man, parent_woman } = req
    return await excuteQuery(`UPDATE ${table} SET id_invitation = ${id_invitation}, man = '${man}', woman = '${woman}', parent_man = '${parent_man}', parent_woman = '${parent_woman}' WHERE id = ${id}`)
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