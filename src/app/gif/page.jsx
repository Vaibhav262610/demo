import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full justify-center flex-col items-center flex'>
        The things I have said for that 
        <h1 className='text-2xl mb-32 font-semibold'>I&apos;M REALLY REALLY SORRY 🙏</h1>
        <h2>POV: You after seeing me ( play this )</h2>
        <iframe width="700" height="250" src="https://www.youtube.com/embed/RDApujgI1dM?si=zaTexO7aPW8-bIHE&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h2 className='text-2xl'>SORRYYYYYYY 😭</h2>
        <Link href='/request'>
        <button className="mt-24 text-2xl font-semibold border-2 hover:bg-black hover:text-white border-black py-2 px-4 text-gray-600">NEXT</button>
        </Link>
    </div>
  )
}

export default page
