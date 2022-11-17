import wr from '@/helpers/WebResponse'
import Request from './model'
import { r_check, r_login, r_register } from './repository'

export async function s_login(req: Request) {
  try {
    const result = await r_login(req)
    if(result.length > 0) return wr(200, 'Login success', result)
    else return wr(400, 'Login failed because email & password is wrong', result)
  } catch(error) {
    console.log(error)
  }
}

export async function s_register(req: Request) {
  try {
    const check = await r_check(req)
    if(check.length === 0) {
      const result = await r_register(req)
      return wr(200, 'Register success', result)
    }
    return wr(400, `Register failed because email is already exist`, [])
  } catch (error: any) {
    console.log(error)
    return error
  }
}