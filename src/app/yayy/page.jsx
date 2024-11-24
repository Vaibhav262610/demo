import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <form
      className='flex flex-col gap-8'
  action="https://formspree.io/f/xyzydjzk"
  method="POST"
>
  <label className='text-center text-xl flex flex-col gap-3 font-semibold'>
    Did you forgive me  ????? 😭 (please say yes)
    <input name="message" className='p-2 text-sm bg-transparent border border-black text-black' placeholder='Enter your answer here..'/>
  </label>
  <label className='text-center text-xl flex flex-col gap-3 font-semibold'>
    Will you come again in my life ? 🛐
    <input name="message" className='p-2 text-sm bg-transparent border border-black text-black' placeholder='Enter your answer here..'/>
  </label>
  <label className='text-xl text-center flex flex-col gap-3 font-semibold'>
    If you wanna send a msg here u can otherwise DM me 😭🙏
    <textarea className='p-2 text-sm bg-transparent border border-black text-black' placeholder='Enter your answer here..' name="message"></textarea>
  </label>
  <button type='submit' className="mt-24 text-2xl font-semibold border-2 hover:bg-black hover:text-white border-black py-2 px-4 text-gray-600">NEXT</button>
</form>
    </div>
  )
}

export default page
