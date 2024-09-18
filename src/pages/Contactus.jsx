import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import Breadcrum from "../_components/Breadcrum";

export default function Contactus() {
  return (
    <>
    <Breadcrum page="Contact"/>
      <div className="max-w-screen-xl mx-auto py-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 p-5 md:p-0 ">
          <div className="flex flex-col gap-3 justify-center items-center  ">
            <BsTelephone size={55} />
            <h2 className="text-xl mt-2">Give Us a Call</h2>
            <p>+91-021530552</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <LuMail size={55} />
            <h2 className="text-xl mt-2">Drop Us a Mail</h2>
            <p>custom@gmail.com</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <IoLocationOutline size={55} />
            <h2 className="text-xl mt-2">Visit Us </h2>
            <p>f-183 2 floor dummy colony,New Dummy-110055</p>
          </div>
        </div>
      
      </div>
    </>
  );
}
