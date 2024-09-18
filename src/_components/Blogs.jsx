import React from "react";
const blog=[{
    src:"/abs.jpeg",
    title : "Learn About Google Ads",
    para : "lorem ipsum dolor sit amet consecture adispicing elit.Odit,illlo.Offcia tempore accusantium odio repellendus nisi odit quisquam, aliquid consectetur esse commodit teneture delectus,fugiat non reprehenderit rescudande amet, quisdam "
 },
 {
    src:"/abs.jpeg",
    title : "Learn About SEO Benefits",
    para : "lorem ipsum dolor sit amet consecture adispicing elit.Odit,illlo.Offcia tempore accusantium odio repellendus nisi odit quisquam, aliquid consectetur esse commodit teneture delectus,fugiat non reprehenderit rescudande amet, quisdam "
 },
 {
    src:"/abs.jpeg",
    title : "How Social Media Marketing Works",
    para : "lorem ipsum dolor sit amet consecture adispicing elit.Odit,illlo.Offcia tempore accusantium odio repellendus nisi odit quisquam, aliquid consectetur esse commodit teneture delectus  "
 }]

export default function Blogs() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="text-4xl pb-8  text-center"> Our Latest Blogs</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 p-5 md:p-0">
          { blog.map((item,index)=>(
            <div key={index} className="shadow-lg hrounded-lg w-full border rounded border-gray-200 p-8 ">
            <img src={item.src} alt=""  className="rounded-lg w-full h-[300px]"/>
            <h1 className="text-2xl py-4 ">{item.title}</h1>
            <p>
              {item.para}
            </p>
          </div>
          ))
          
          
          }
         
        </div>
      </div>
    </>
  );
}
