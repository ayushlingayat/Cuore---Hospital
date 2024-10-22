import React from 'react'

const Logos = () => {
  return (
    <div className=' py-10 w-full flex justify-center gap-14'>
        <div className='flex h-[5vw] w-[20vw] gap-5 items-center '>
            <div className='h-full w-[30%] bg-zinc-200  rounded-lg'></div>
            <p className=' text-lg'>Medical device according to MDR</p>
        </div>
        <div className='flex h-[5vw] w-[20vw] gap-5 items-center '>
            <div className='h-full w-[30%] bg-zinc-200  rounded-lg'></div>
            <p className=' text-lg'>GDPR compliant</p>
        </div>
        <div className='flex h-[5vw] w-[20vw] gap-5 items-center '>
            <div className='h-full w-[30%] bg-zinc-200  rounded-lg'></div>
            <p className=' text-lg'>Based on international guidelines</p>
        </div>
    </div>
  )
}

export default Logos