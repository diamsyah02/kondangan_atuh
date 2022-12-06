"use client"
import { useState } from 'react'

const DalilKitab = (props: any) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <div className="w-full p-3 border mb-5">
        <div 
          className="py-3 rounded border text-center shadow-lg cursor-pointer"
          onClick={() => setShowForm(!showForm)}>Dalil Kitab <span className="text-xl">{'>'}</span></div>
        {showForm &&
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="reception_date">Surah/Sumber</label>
              <input
                type="text"
                className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2"
                onChange={(text) => props.sumber(text.target.value)}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="reception_date">Ayat/Isi</label>
              <textarea
                className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2"
                onChange={(text) => props.isi(text.target.value)}
              ></textarea>
            </div>
          </form>
}
      </div>
    </>
  )
}

export default DalilKitab