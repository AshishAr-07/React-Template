import React from 'react'

export default function Breadcrum(prop) {
  return (
    <>
    <div className='w-full h-[15vw] flex flex-col gap-8 justify-center items-center '>
        <p className='text-5xl font-bold'>{prop.page}</p>
        <p className='text-lg font-semibold'>Home {`>`} <span className='underline'> {prop.page}</span></p>
    </div>
    </>
  )
}

