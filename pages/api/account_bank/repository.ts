import Request from './model'
import excuteQuery from '@/lib/db'

const table: string = `account_bank`

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
    const { id_invitation, acc_name, acc_no } = req
    return await excuteQuery(`INSERT INTO ${table} (id_invitation, acc_name, acc_no) VALUES (${id_invitation}, '${acc_name}', '${acc_no}')`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}
export async function r_update(req: Request, id: number) {
  try {
    const { id_invitation, acc_name, acc_no } = req
    return await excuteQuery(`UPDATE ${table} SET id_invitation = ${id_invitation}, acc_name = '${acc_name}', acc_no = '${acc_no}' WHERE id = ${id}`)
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