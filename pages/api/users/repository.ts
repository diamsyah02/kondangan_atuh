import Request from './model'
import excuteQuery from '@/lib/db'
const md5 = require('md5')
const table = `users`

export async function r_login(req: Request) {
  try {
    const { email, password } = req
    return await excuteQuery(`SELECT * FROM ${table} WHERE email = '${email}' && password = '${md5(password)}'`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function r_register(req: Request) {
  try {
    const { fullname, email, password } = req
    return await excuteQuery(`INSERT INTO ${table} (fullname, email, password) VALUES ('${fullname}', '${email}', '${md5(password)}')`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}

export async function r_check(req: Request) {
  try {
    const { email } = req
    return await excuteQuery(`SELECT * FROM ${table} WHERE email = '${email}'`)
  } catch (error: any) {
    console.log(error)
    return error
  }
}