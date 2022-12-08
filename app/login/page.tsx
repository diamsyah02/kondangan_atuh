"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@/helpers/ConsumeApi'
import { setCookie } from 'cookies-next'
import baseURL from '@/lib/constant'

const Page = () => {
  const [email, setEmail] = useState('nanda@gmail.com')
  const [password, setPassword] = useState('1234')

  const router = useRouter()

  async function onLogin(e: any) {
    e.preventDefault()
    let body = {
      email: email,
      password: password
    }
    let res = await auth(`${baseURL}users?action=login`, body)
    if(res.statusCode == 200) {
      router.replace('/')
      setCookie('auth_kondangan', res.result)
    }
  }
  return (
    <>
      <div className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className='text-center text-3xl font-bold mb-5'>Kondangan Atuh</div>
              <form onSubmit={onLogin}>
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    onChange={(text) => setEmail(text.target.value)}
                    value={email}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    onChange={(text) => setPassword(text.target.value)}
                    value={password}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </button>

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <Link
                  href="/register"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page