import { Check } from "lucide-react";
import React from "react";

const Navbenifit = () => {
  return (
    <>
      <div className="2xl:container mx-auto my-3">
        <div className="w-[100%] grid grid-cols-1 px-4 lg:px-8 py-6 bg-white rounded-lg" id="certi">
          <div className="py-3 flex flex-col gap-2">
            <p className="font-[Regular] font-bold text-[16px] md:text-[20px] text-[#192335]">
            Who Should Enroll             </p>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="flex ">
                <div>
                  <Check color="#3eb75e" />
                </div>
                <p className="font-[#1176F0] text-[14px] md:text-[16px] text-[#6b7385] ">
                  {" "}
                  Students and professionals interested in UI/UX design.
                </p>
              </div>
              <div className="flex gap-1">
                <div>
                <Check color="#3eb75e" />{" "}
                </div>
                <p className="font-[#1176F0] text-[16px] text-[#6b7385] ">
                Graphic designers looking to enhance their digital design skills.
                </p>
              </div>
              <div className="flex ">
                <div>
                  <Check color="#3eb75e" />
                </div>
                <p className="font-[#1176F0] text-[16px] text-[#6b7385] ">
                  {" "}
                  Anyone looking to transition into a career in design.                </p>
              </div>
              <div className="flex gap-1">
                <div>
                <Check color="#3eb75e" />{" "}
                </div>
                <p className="font-[#1176F0] text-[16px] text-[#6b7385] ">
                Developers who want to learn the basics of design.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbenifit;
