import { setCookie } from 'cookies-next'
import wr from '@/helpers/WebResponse'
import Request from './model'
import { r_check, r_login, r_register } from './repository'

export async function s_login(req: Request) {
  try {
    const result = await r_login(req)
    if('error' in result) return wr(500, `Opss something's wrong!`, result)
    if(result.length > 0) {
      const data = {
        token: 'async__await',
        data: result
      }
      return wr(200, 'Login success', data)
    }
    else return wr(400, 'Login failed because email & password is wrong', result)
  } catch(error: any) {
    return wr(500, `Opss something's wrong!`, error)
  }
}

export async function s_register(req: Request) {
  try {
    const check = await r_check(req)
    if('error' in check) return wr(500, `Opss something's wrong!`, check)
    if(check.length === 0) {
      const result = await r_register(req)
      if('error' in result) return wr(500, `Opss something's wrong!`, result)
      return wr(200, 'Register success', result)
    }
    return wr(400, `Register failed because email is already exist`, [])
  } catch (error: any) {
    return wr(500, `Opss something's wrong!`, error)
  }
}