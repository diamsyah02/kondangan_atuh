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
import { postData } from "@/helpers/ConsumeApi"
import baseURL from "@/lib/constant"

const Page = () => {
  const [loading, setLoading] = useState(true)
  // invitation
  const [invitation, setInvitation] = useState({ id_user: 0, reception_date: '', place: '' })
  // special invite
  const [listSpecialInvite, setListSpecialInvite] = useState<string[]>([])
  // dalil kitab
  const [dalilKitab, setDalilKitab] = useState({ id_invitation: 0, sumber: '', isi: '' })
  // bride
  const [man, setMan] = useState('')
  const [woman, setWoman] = useState('')
  const [parentMan, setParentMan] = useState({ mother: '', father: '' })
  const [parentWoman, setParentWoman] = useState({ mother: '', father: '' })
  // account bank
  const [accountBank, setAccountBank] = useState({ id_invitation: 0, acc_name: '', acc_no: '' })
  // gallery photo
  const [photo, setPhoto] = useState<string[]>([])
  const router = useRouter()
  useEffect(() => {
    const cookie: any = getCookie('auth_kondangan')
    if (cookie === undefined) return router.replace('login')
    const cookie_parse = JSON.parse(cookie)
    setInvitation({ id_user: cookie_parse.data[0].id, reception_date: ``, place: `` })
    setLoading(false)
  }, [])

  async function onSave() {
    const cookie: any = getCookie('auth_kondangan')
    const resInvitation = await postData(`${baseURL}invitation`, invitation)
    if(resInvitation) {

    }
  }
  return (
    <>
      {loading ?
        <Loading />
        :
        <div className='flex flex-wrap h-screen overflow-y-auto'>
          <div className='hidden md:block w-1/5'>
            <Sidebar />
          </div>
          <div className='w-full md:w-4/5 p-5 overflow-auto'>
            <div className="flex flex-wrap space-x-3">
              <div className="w-full md:w-1/2">
                <Invitation 
                  receptionDate={(text: string) => setInvitation({ id_user: invitation.id_user, reception_date: text, place: `` })}
                  place={(text: string) => setInvitation({ id_user: invitation.id_user, reception_date: invitation.reception_date, place: text })}
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
                  sumber={(text: string) => setDalilKitab({ id_invitation: dalilKitab.id_invitation, sumber: text, isi: `` })}
                  isi={(text: string) => setDalilKitab({ id_invitation: dalilKitab.id_invitation, sumber: dalilKitab.sumber, isi: text })}
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
                  accName={(text: string) => setAccountBank({ id_invitation: 0, acc_name: text, acc_no: '' })}
                  accNo={(text: string) => setAccountBank({ id_invitation: 0, acc_name: accountBank.acc_name, acc_no: text })}
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