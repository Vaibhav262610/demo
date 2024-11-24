import React from 'react'

const page = () => {


  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='text-8xl mb-16 element'>🙏</h1>
      <form
      className='flex justify-center items-center flex-col gap-8'
  action="https://formspree.io/f/xyzydjzk"
  method="POST"
>
  <label className='text-center text-xl justify-center items-center flex flex-col gap-3 '>
    Will you plz plz come again in my life ? 🛐
    <input name="message" className='p-2 text-sm bg-transparent outline-none w-[370px] border border-black text-black' placeholder='Enter your answer here..' required/>
  </label>
  <label className='text-center text-xl justify-center items-center flex flex-col gap-3 '>
    Can you forgive me  ????? 😭 (please say yes)
    <input name="message" className='p-2 outline-none text-sm bg-transparent  w-[370px] border border-black text-black' placeholder='Enter your answer here..' required/>
  </label>
  <label className='text-xl justify-center items-center text-center flex flex-col gap-3 '>
    If you wanna send a msg here u can otherwise DM me ( GAALI BHI DE SKTI HO ) 😭🙏
    <textarea className='p-2 text-sm bg-transparent outline-none w-[370px] border border-black text-black' placeholder='Enter your answer here..' name="message" required></textarea>
  </label>
  <button type='submit' className="mt-24 w-fit text-2xl font-semibold border-2 hover:bg-black hover:text-white border-black py-2 px-4 text-gray-600">SEND</button>
</form>
<h2 className='mt-5'>-by AAPKA GUNEGAAR VAIBHAV 🙂</h2>
    </div>  
  )
}

export default page
