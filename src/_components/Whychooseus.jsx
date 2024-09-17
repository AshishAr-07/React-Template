import React from 'react'
const card = [{
  title: "Result Driven",
  para : "we take a results-driven approach to ensure your business goals are met with measurable outcomes."
},{
  title: "Creative Design",
  para : "we take a results-driven approach to ensure your business goals are met with measurable outcomes."
},{
  title: "Innovative Approach",
  para : "we take a results-driven approach to ensure your business goals are met with measurable outcomes."
}]
export default function Whychooseus(tip) {
  return (
    <>
    
    <div className='max-w-screen-xl mx-auto py-10 text-center'>
        <div className='text-4xl pb-8 '>Why Choose Us</div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 p-5 md:p-0'>
{
  card.map((item,index)=> (<div key={index} className='shadow-lg hrounded-lg w-full border rounded border-gray-200 p-8 ' >
    <img src="" alt="" />
    <h1 className='text-2xl py-4 '>{item.title}</h1>
    <p> {item.para}</p>
    </div>) )
}


</div>

    </div>
    </>
  )
}
