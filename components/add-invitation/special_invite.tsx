"use client"
import { useState } from 'react'

const SpecialInvite = () => {
  const [formValues, setFormValues] = useState([{ special_invite: "" }])
  const [showForm, setShowForm] = useState(false)

  function handleChange(i: number, e: any) {
    let newFormValues = [...formValues]
    newFormValues[i]['special_invite'] = e.target.value
    setFormValues(newFormValues)
  }

  function addFormFields() {
    setFormValues([...formValues, { special_invite: "" }])
  }

  function removeFormFields(i: number) {
    let newFormValues = [...formValues]
    newFormValues.splice(i, 1)
    setFormValues(newFormValues)
  }

  return (
    <>
      <div className="w-full p-3 border mb-5">
        <div
          className="py-3 rounded border text-center shadow-lg cursor-pointer"
          onClick={() => setShowForm(!showForm)}>Special Invite <span className="text-xl">{'>'}</span></div>
        {showForm &&
        <>
          <form>
            {formValues.map((item, i) =>
              <div className="flex justify-center items-center mb-3 mt-3" key={i}>
                <div className={i ? 'w-11/12' : 'w-full'}>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2"
                    placeholder='Nama'
                  />
                </div>
                {
                  i ?
                    <div className='w-1/12 text-center'>
                      <button type="button" className="px-3 py-1 rounded bg-red-700 text-white" onClick={() => removeFormFields(i)}>-</button>
                    </div>
                    : null
                }
              </div>
            )}
          </form>
          <button type='button' className='px-2 py-1 rounded bg-blue-700 text-white' onClick={addFormFields}>+</button>
          </>
        }
      </div>
    </>
  )
}

export default SpecialInvite