import React from 'react'
const service =[{
  heading:" SEO Optimization",
  para:"Be at the top of google page search by its powerful and incredible Search Engine Optimization technique.",
  src:"/analysis.png"

},
{
  heading:" Social Media",
  para:"Be at the top of google page search by its powerful and incredible Search Engine Optimization technique.",
  src:"/promotion.png"

},
{
  heading:" Email Marketing",
  para:"Be at the top of google page search by its powerful and incredible Search Engine Optimization technique.",
  src:"/mail.png"

}
]
export default function Services() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
         <div className='text-4xl pb-8  text-center'>Our Services</div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:p-0 '>
 {
  service.map((items,index)=> (
    <div key={index} className='p-8  hover:shadow-lg hover:ease-out duration-300  hover:rounded-lg w-full border rounded border-gray-100 text-center'>
<img src={items.src} width={50} height={50} className='mx-auto'/>
<h1 className="text-2xl py-3 font-semibold text-gray-900">{items.heading}</h1>
<p className="text-md ">
{items.para}
          </p>
</div>
  ))
 }

</div>

    </div>
  )
}
