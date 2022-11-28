import AccountBank from "@/components/add-invitation/account_bank"
import Bride from "@/components/add-invitation/bride"
import DalilKitab from "@/components/add-invitation/dalil_kitab"
import Invitation from "@/components/add-invitation/invitation"
import PhotoGallery from "@/components/add-invitation/photo_gallery"
import SpecialInvite from "@/components/add-invitation/special_invite"
import Sidebar from "@/components/sidebar"

const Page = () => {
  return (
    <>
      <div className='flex flex-1 h-screen'>
        <div className='hidden md:block w-1/5'>
          <Sidebar />
        </div>
        <div className='w-full md:w-4/5 p-5 overflow-auto'>
          <div className="flex flex-1 space-x-3">
            <div className="w-full md:w-1/2">
              <Invitation />
              <SpecialInvite />
              <DalilKitab />
            </div>
            <div className="w-full md:w-1/2">
              <Bride />
              <AccountBank />
              <PhotoGallery />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page