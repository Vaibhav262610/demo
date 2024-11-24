import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex-col gap-8 justify-center items-center flex'>
        <h1 className='text-9xl element mb-24'>👨‍💻</h1>
      <h1 className='text-center'>So, I going to ask some questions please answer them honestly no lies no excuses</h1>
      <h2 className='text-center'>and yes I never judged you for real....abhi kuch dino mai bht kuch ho gya h dengue, paper chut gya mera and mamy more so just come back bht si baatein krni h 🛐</h2>
      <h2>Mujhe jitna sunana hai suna lena but just come back</h2>
      <Link href='/yayy'>
        <button className="text-2xl font-semibold border-2 hover:bg-black hover:text-white border-black py-2 px-4 text-gray-600">YES</button>
        </Link>
    </div>
  )
}

export default page
