import React, { useState } from 'react'
import Nav from './Nav'
import Description from './Description'

function Poetfolio() {

    const [des,setdes]=useState(false);

    const descriptionhandle = () => {
        setdes(!des);
    };

  return (
    
    <div>
        <Nav />
        <div className='w-[85%] h-full m-auto flex justify-center items-center gap-20'>
            <div className='w-[50%] h-full'>
            <div className='h-[60%]'>
                <h1 className='text-6xl text-white font-bold text-nowrap'>Hello,<br/>I am 
                <span className='text-green-400 text-nowrap '> Harsh Kumar!</span>
                 <div className='text-white opacity-30 text-xs font-bold'>A WEB DEVELOPER</div> 
                 <button onClick={descriptionhandle} className='px-3 py-1 text-lg font-semibold border rounded-full hover:text-green-300 hover:shadow-2xl'> {des ? 'X' : 'Explore ME!'}</button></h1>
            </div>
            <div className=''>
                {des && <Description/>}
            </div>
            </div>
          <div className='w-500 h-500 bg-green-300 overflow-hidden' style={{borderRadius: "61% 39% 58% 42% / 66% 20% 80% 34% "}}>
            <img className='' src="photo_2024-09-12_08-52-34-removebg.png" alt="" />
          </div>
        </div>
        
        
    </div>
    
  )
}

export default Poetfolio