import React, { useState } from "react";
import { navcourseimg1 } from "../../../assets/image";

const Navabout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="2xl:container bg-[#FCFCFC]">
        <div
          className="w-[100%] grid grid-cols-1 lg:px-8 px-3 shadow-lg py-2 lg:py-6 bg-white rounded-lg"
          id="certi"
        >
          <p className={open ? null : "line-clamp-4"}>
            <div>
            <div className="py-3">
              <p className="font-[Poppins] font-bold text-black text-[18px] md:text-[20px]">
                About Course
              </p>
            </div>
            <hr />

            <div className="py-3">
              <p className="font-[Poppins] font-bold text-[16px] md:text-[20px] text-black">
              Figma: Where creativity meets productivity 
              </p>
            </div>
            <div className="py-3">
              <p className="font-[Poppins] text-[#41454f] text-[14px] ">
                <span className="font-bold font-[Poppins]">This Figma </span>{" "}
                 training program is designed to equip you with the skills to create stunning UI/UX designs. Over the course of two months, you will learn how to use Figma's powerful design and prototyping tools to bring your creative ideas to life. By the end of the training, you'll be proficient in designing user-friendly and visually appealing interfaces.
              </p>
            </div>
            
            
            <div className="h-[70%] w-[100%]">
              <img src={navcourseimg1} alt="navimg" className="h-full w-full" />
            </div>
            <div className="my-4">
              <p className="font-[Poppins] text-[#41454f] text-[14px]">
              This program offers a practical, hands-on approach to mastering Figma, preparing you for a successful career in UI/UX design. Get ready to create stunning designs and impress your future clients or employers with a professional-grade portfolio.
              </p>
            </div>
            </div>
            
          </p>

          <div>
            <button className="font-[Poppins] font-bold text-[14px] bg-white py-4 px-2 text-[#1176F0]" onClick={() => setOpen(!open)}>
              {open ? "- Show less" : "+ Show more"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navabout;
