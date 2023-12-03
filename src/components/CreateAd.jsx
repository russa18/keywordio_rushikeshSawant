import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateAd = () => {

  const [checkedText, setCheckedText] = useState(false)
  const [checkedMedia, setCheckedMedia] = useState(false)
  const [msg, setMsg] = useState('')

  const navigate = useNavigate()

  const showForm = (e) => {
    e.preventDefault();

    if (!checkedText && !checkedMedia) {
      setMsg('Please select one Form type')
    } else if (checkedText && checkedMedia) {
      setCheckedMedia(false)
      setCheckedText(false)
      setMsg('Please select Either one Form type')
    } else if (checkedText) {
      navigate('/create-ad/textForm')

    } else if (checkedMedia) {
      navigate('/create-ad/mediaForm')
    }
  }

  return (
    <div className='shadow-md rounded-md p-4 m-auto my-5  w-[96%] border-2 border-slate-100'>
      <p className='text-base font-semibold leading-7 text-gray-900'>Create Ads</p>

      {msg ? <p className='text-center text-yellow-500'>{msg}</p> : null}

      <form onSubmit={showForm}>

        <div className='flex justify-center my-10'>

          <div onClick={() => setCheckedText((prev) => !prev)} className='mx-4 border-slate-300 shadow-md p-5 pb-0 rounded-lg'>
            <input type="checkbox" id='text-form' checked={checkedText} readOnly className='w-5 h-5' />
            <div className='p-5 pb-0'>

              <div className='rounded-t-lg border-b-0 border-2 p-5 pb-0'>
                <img src="./src/assets/images/text-form-img.jpeg" alt="text form" />

              </div>
            </div>
            <div className='text-center bg-slate-50 py-3'>
              <p className='text-sm text-slate-400'>Create</p>
              <p className='text-md font-bold text-slate-800'>Text Ad</p>
            </div>
          </div>

          <div onClick={() => setCheckedMedia((prev) => !prev)} className='mx-4 border-slate-300 shadow-md p-5 pb-0 rounded-lg'>
            <input type="checkbox" id='media-form' checked={checkedMedia} readOnly className='w-5 h-5 text-slate-200' />
            <div className='p-5 pb-0'>

              <div className='rounded-t-lg border-b-0 border-2 p-5 pb-0'>

                <img src="./src/assets/images/media-form-img.jpeg" alt="media form" />
              </div>
            </div>
            <div className='text-center bg-slate-50 py-3'>
              <p className='text-sm text-slate-400'>Create</p>
              <p className='text-md font-bold text-slate-800'>Media Ad</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">

          <button type='submit' className='bg-blue-500 text-white px-10 py-2 rounded-md '>Next</button>

        </div>

      </form>

    </div>
  )
}
