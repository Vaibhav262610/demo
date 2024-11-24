import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-4 justify-center items-center '>
        <h1 className='font-semibold'>I know there is huge misunderstanding between us </h1>
        <h2 className='text w-80 text-center'>and I also know that you were having mood swings that time but trust me Aditi i really never experience this before because I only approch those to whom i really cared for like you and that was the best time I had in my life</h2>
        <h2 className='text-2xl mt-24 font-semibold text-center'>And I want you in MY LIFE FOREVER <br/> not like a gf but as a FRIEND 💖</h2>
        <h1 className='mt-24'>So, will you please come again in my life like before ?😭</h1>
        <div className='flex gap-20'>
        <Link href='/confirm'>
        <button className="text-2xl font-semibold border-2 hover:bg-black hover:text-white border-black py-2 px-4 text-gray-600">YES</button>
        </Link>
        <Link href='/request2'>
        <button className="text-2xl font-semibold border-2 hover:bg-black hover:text-white border-black py-2 px-4 text-gray-600">NO</button>
        </Link>
        </div>
    </div>
  )
}

export default page
