"use client"
import { useState } from 'react'

const Invitation = (props: any) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <div className="w-full p-3 border mb-5">
        <div 
          className="py-3 rounded border text-center shadow-lg cursor-pointer"
          onClick={() => setShowForm(!showForm)}>Invitation <span className="text-xl">{'>'}</span></div>
        {showForm &&
          <>
            <div className="mb-3 mt-3">
              <label htmlFor="reception_date">Tanggal Resepsi</label>
              <input
                type="date"
                className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2"
                onChange={(text) => props.receptionDate(text.target.value)}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="reception_date">Alamat</label>
              <textarea
                className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2"
                onChange={(text) => props.place(text.target.value)}
              ></textarea>
            </div>
          </>
}
      </div>
    </>
  )
}

export default Invitation