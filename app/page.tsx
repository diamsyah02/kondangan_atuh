"use client"

import Link from 'next/link'
import Sidebar from '@/components/sidebar'
import { getData } from '@/helpers/ConsumeApi'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '@/components/loading'
import { getCookie } from 'cookies-next'

const Page = () => {
  let inv = getData(`http://localhost:3000/api/invitation`)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const cookie: any = getCookie('auth_kondangan')
    if (cookie === undefined) return router.replace('login')
    console.log(JSON.parse(cookie))
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? 
      <Loading />
      :
      <div className='flex flex-1 h-screen'>
        <div className='hidden md:block w-1/5'>
          <Sidebar />
        </div>
        <div className='w-full md:w-4/5 p-5 overflow-auto'>
          <div className="text-3xl font-bold mb-12">Selamat Datang Nanda Adistya Purnama</div>
          <Link href="/invitation/add">
            <div className="w-32 h-32 border border-black cursor-pointer rounded text-center p-5">
              <div className="text-6xl font-bold">+</div>
              <small>Undangan</small>
            </div>
          </Link>
        </div>
      </div>
}
    </>
  )
}

export default Page