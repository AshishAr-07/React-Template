import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiStarSFill } from "react-icons/ri";
export default function Testinomials() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="text-4xl pb-8  text-center">Testinomials</div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col  md:shadow-lg md:border rounded-lg p-10">
          <div className="flex gap-4 items-center">
            <CgProfile size={55} />
            <p className="text-lg">Sumit kumar</p>
          </div>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            asperiores inventore, saepe debitis aliquid ratione non laborum,
            porro magni facilis eligendi maxime eos veniam repudiandae at
            accusantium eveniet, nam quam.
          </p>
          <div className="flex  mt-4">
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
          </div>
        </div>
        <div className="flex flex-col md:shadow-lg md:border rounded-lg p-10">
          <div className="flex gap-4 items-center">
            <CgProfile size={55} />
            <p className="text-lg">Praveen kumar</p>
          </div>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            asperiores inventore, saepe debitis aliquid ratione non laborum,
            porro magni facilis eligendi maxime eos veniam repudiandae at
            accusantium eveniet, nam quam.
          </p>
          <div className="flex  mt-4">
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
            <RiStarSFill size={26} color="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
}
