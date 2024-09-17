import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-gray-100'>
    <div className="max-w-screen-xl mx-auto py-10">
       <div className='grid grid-cols-1 md:p-0 px-4 py-4 gap-10 md:grid-cols-4'>
<div className='md:col-span-2 pe-10'>
<h1 className='mb-4 text-4xl '>Dummy Logo</h1>
<p>Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit. Blanditiis, modi?</p>
</div>
<div className=''>
    <h1 className='text-lg mb-4 font-semibold'>Quick Links</h1>
    <h3>Home</h3>
    <h3>Home</h3>
    <h3>Home</h3>
    <h3>Home</h3>
</div>
<div className=''>
    <h1 className='text-lg mb-4 font-semibold'>Follow Us</h1>
    <h3>Insatgram</h3>
    <h3>Facebook</h3>
    <h3>Twitter</h3>
   
</div>

       </div>
    </div>
<div className='w-full flex justify-center items-center py-3  border-t-2'>
<p>©️Copywright Dummy 2024.All Right Reserved.</p>
</div>
    </div>
    
    </>
  )
}
