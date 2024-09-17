"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabContent = {
    mission:
      "Our mission is to empower businesses by delivering innovative and data-driven marketing solutions that drive growth, enhance brand visibility, and connect companies with their target audience. We are committed to understanding the unique needs of every client and crafting customized strategies that deliver measurable, long-term success.",
    vision:
      "Our vision is to redefine the future of marketing by setting a new standard of excellence in creativity, innovation, and client satisfaction. We aspire to be a global leader in marketing solutions, known for transforming businesses through powerful, impactful campaigns.",
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div className="p-5 "><img src="/abs.jpeg" className="w-[600px] md:h-[500px] h-[300px]"></img></div>
        <div className="md:px-0  flex flex-col p-5 h-full ">
          <h1 className="text-lg font-semibold text-gray-900">About us</h1>
          <hr className="h-0.5 bg-black md:w-[13%] w-[22%] my-2"></hr>
          <p className="text-3xl  text-gray-900 my-heading">
            All Your Marketing Needs <br />at one place
          </p>
          <p className="text-lg pt-2 mb-4">
            We are more than just a marketing agency- we
            are your dedicated partners in growth. With a passion for creativity
            and a deep understanding of market dynamics, we help brands
            transform their vision into reality.
          </p>
          <div className="font-sans">
            <div className="flex border-b border-gray-300">
              {['mission', 'vision'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ease-in-out ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 text-gray-700 leading-relaxed"
            >
              {tabContent[activeTab]}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
