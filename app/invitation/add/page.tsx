"use client"
import { useEffect, useState } from "react"
import AccountBank from "@/components/add-invitation/account_bank"
import Bride from "@/components/add-invitation/bride"
import DalilKitab from "@/components/add-invitation/dalil_kitab"
import Invitation from "@/components/add-invitation/invitation"
import PhotoGallery from "@/components/add-invitation/photo_gallery"
import SpecialInvite from "@/components/add-invitation/special_invite"
import Sidebar from "@/components/sidebar"
import { useRouter } from "next/navigation"
import Loading from "@/components/loading"
import { getCookie } from "cookies-next"

const Page = () => {
  const [loading, setLoading] = useState(true)
  // invitation
  const [receptionDate, setReceptionDate] = useState('')
  const [place, setPlace] = useState('')
  // special invite
  const [listSpecialInvite, setListSpecialInvite] = useState<string[]>([])
  // dalil kitab
  const [sumber, setSumber] = useState('')
  const [isi, setIsi] = useState('')
  // bride
  const [man, setMan] = useState('')
  const [woman, setWoman] = useState('')
  const [parentMan, setParentMan] = useState({ mother: '', father: '' })
  const [parentWoman, setParentWoman] = useState({ mother: '', father: '' })
  // account bank
  const [accName, setAccName] = useState('')
  const [accNo, setAccNo] = useState('')
  // gallery photo
  const [photo, setPhoto] = useState<string[]>([])
  const router = useRouter()
  useEffect(() => {
    if (getCookie('auth_kondangan') === undefined) router.replace('login')
    else setLoading(false)
  }, [])

  function onSave() {
    alert(JSON.stringify(parentMan))
  }
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
            <div className="flex flex-1 space-x-3">
              <div className="w-full md:w-1/2">
                <Invitation 
                  receptionDate={(text: string) => setReceptionDate(text)}
                  place={(text: string) => setPlace(text)}
                />
                <SpecialInvite
                  listSpecialInvite={(text:string) => setListSpecialInvite([...listSpecialInvite, text])}
                  removeList={(i: number) => {
                    let newListSpecialInvite = [...listSpecialInvite]
                    newListSpecialInvite.splice(i, 1)
                    setListSpecialInvite(newListSpecialInvite)
                  }}
                />
                <DalilKitab
                  sumber={(text: string) => setSumber(text)}
                  isi={(text: string) => setIsi(text)}
                />
              </div>
              <div className="w-full md:w-1/2">
                <Bride 
                  man={(text: string) => setMan(text)}
                  woman={(text: string) => setWoman(text)}
                  motherMan={(text: string) => setParentMan({ mother: text, father: parentMan.father })}
                  fatherMan={(text: string) => setParentMan({ mother: parentMan.mother, father: text })}
                  motherWoman={(text: string) => setParentWoman({ mother: text, father: parentWoman.father })}
                  fatherWoman={(text: string) => setParentWoman({ mother: parentWoman.mother, father: text })}
                />
                <AccountBank 
                  accName={(text: string) => setAccName(text)}
                  accNo={(text: string) => setAccNo(text)}
                />
                <PhotoGallery
                  photo={(file: any) => setPhoto([...photo, file[0]])}
                  removePhoto={(i: number) => {
                    let newPhoto = [...photo]
                    newPhoto.splice(i, 1)
                    setPhoto(newPhoto)
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-3">
              <button className="py-2 px-5 rounded bg-blue-700 text-white" onClick={onSave}>Save</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Page