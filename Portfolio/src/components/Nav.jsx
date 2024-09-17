import React from 'react'

function Nav() {
  return (
    <>
    <div className='w-[80%] m-auto flex justify-between items-center pt-5 mb-7'>
        <h1 className='text-green-300 text-3xl font-bold'>PORTFOLIO</h1>
        <div className='flex gap-5'>
            <a className='text-white text-xl font-semibold' href="/">Home</a>
            <a className='text-white text-xl font-semibold' href="/about">About</a>
            <a className='text-white text-xl font-semibold' href="/hire">HIRE ME!</a>
        </div>
    </div>
    </>
    
  )
}

export default Nav