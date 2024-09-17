import React from "react";

export default function HeroBanner() {
  return (
    <>
      <div className="bg-red-700  text-white h-[80vh] gap-5 flex flex-col justify-center items-center">
        <div className=" flex flex-col text-center font-semibold text-3xl md:text-6xl"><span>YOUR VISION </span><span>OUR DIGITAL EXPERTISE</span></div>
        <div className="md:text-md text-center "><p>
          We craft digital experiences that inspire, engage, and convert.From
          sleek websites to dynamic marketing strategies.
        </p></div>
      </div>
    </>
  );
}
