import { getCookie } from 'cookies-next'
import { redirect } from 'next/navigation'

export default function Authentication() {
  return getCookie('auth_kondangan')
  // console.log(cookie)
  // if(cookie === undefined) {
  //   redirect('/login')
  // }
}