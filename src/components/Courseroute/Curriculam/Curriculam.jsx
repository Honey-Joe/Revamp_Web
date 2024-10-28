import { ChevronRight, LockKeyhole, Youtube } from "lucide-react";
import { useState } from "react";
const Curriculam = () => {
  const [accordion, setAccordion] = useState(false);
  const [basic, setBasic] = useState(false);
  const [basic1, setBasic1] = useState(false);
  const [basic2, setBasic2] = useState(false);
  const [basic3, setBasic3] = useState(false);
  return (
    <>
      <div>
        <div className="px-6 py-[60px] w-[100%]">
          <h1 className=" font-semibold text-[22px] font-[Poppins] text-[#FF9F00]">
            Course Curriculum
          </h1>
          <div className=" pt-5 group">
            <button
              onClick={() => setAccordion(!accordion)}
              className={`flex items-center md:justify-between w-full p-3 rounded-md border-2  ${
                accordion
                  ? "rounded-bl-none rounded-br-none   transition ease-in-out"
                  : "rounded-md"
              }`}
            >
              <span className="line-clamp-1 font-medium font-[Poppins] text-[18px] transition-colors ease-in-out group-hover:text-[#FF9F00] text-start ">
                Intoductions & Inspiration
              </span>

              <span>
                <ChevronRight
                  className={`${
                    accordion
                      ? "-rotate-90 transition stroke-[#FF9F00]"
                      : " rotate-0 transition stroke-[#FF9F00]"
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all  rounded-b-md duration-300 ease-in-out  text-sm border-2 ${
                accordion
                  ? "grid-rows-[1fr] opacity-100 ease-in-out delay-700 transition-all"
                  : "grid-rows-[0fr] opacity-0 hidden transition"
              }`}
            >
              <div className="p-3 flex items-center gap-2 justify-between hover:">
                <div className=" flex items-center gap-2">
                  <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    What is UIUX ?{" "}
                  </p>
                </div>
                
              </div>

              <div className="p-3 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2 justify-center">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Where it is Used?
                  </p>
                </div>
                
              </div>
              <div className="p-3 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800">
                    Demands
                  </p>
                </div>
                
              </div>

              <div className="p-3 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Future Plans by learning FIGMA
                  </p>
                </div>
                
              </div>
              <div className="p-3 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Syllabus Detailed Explanations
                  </p>
                </div>
                
              </div>
              <div className="p-3 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Tools Setup i.e FIGMA
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <br />
          <div className=" pt-0 group">
            <button
              onClick={() => setBasic(!basic)}
              className={`flex items-center justify-between w-full  p-3 rounded-md border-2  ${
                basic
                  ? "rounded-bl-none rounded-br-none   "
                  : "rounded-md"
              }`}
            >
              <span className="line-clamp-1 font-medium font-[Poppins] text-[18px] text-center transition-colors ease-in-out group-hover:text-[#FF9F00]">
                Sketching
              </span>
            </button>
          </div>
          <br />
          <div className=" pt-0 group">
            <button
              onClick={() => setBasic1(!basic1)}
              className={`flex items-center justify-between w-full  p-3 rounded-md border-2  ${
                basic1
                  ? "rounded-bl-none rounded-br-none  "
                  : "rounded-md"
              }`}
            >
              <span className=" font-medium font-[Poppins] text-[18px] transition-colors ease-in-out group-hover:text-[#FF9F00] line-clamp-1 text-start">
                Project : Sketching a EDTECH APP & WEBSITE
              </span>
            </button>
          </div>
          <br />
          <div className=" pt-0 group">
            <button
              onClick={() => setBasic2(!basic2)}
              className={`flex items-center justify-between w-full  p-3 rounded-md border-2  ${
                basic2
                  ? "rounded-bl-none rounded-br-none  "
                  : "rounded-md"
              }`}
            >
              <span className=" font-medium font-[Poppins] text-[18px] transition-colors ease-in-out group-hover:text-[#FF9F00]">
                Figma Basics
              </span>
            </button>
          </div>
          <br />
          <div className=" pt-0 group">
            <button
              onClick={() => setBasic3(!basic3)}
              className={`flex items-center justify-between w-full  p-3 rounded-md border-2  ${
                basic3
                  ? "rounded-bl-none rounded-br-none text-[#FF9F00]  "
                  : "rounded-md"
              }`}
            >
              <span className=" font-medium font-[Poppins] text-[18px] transition-colors ease-in-out group-hover:text-[#FF9F00]">
                Figma Tool
              </span>

              <span>
                <ChevronRight
                  className={`${
                    basic3
                      ? "-rotate-90 transition stroke-[#FF9F00]"
                      : " rotate-0 transition stroke-[#FF9F00]"
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all  border-2 rounded-b-md duration-300 ease-in-out  text-sm ${
                basic3
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0 hidden"
              }`}
            >
              <div className="p-5 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Figma UI — Structure
                  </p>
                </div>
                
              </div>

              <div className="p-5 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Figma UI — Files
                  </p>
                </div>
                
              </div>

              <div className="p-5 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Figma UI — Toolbar
                  </p>
                </div>
                
              </div>
              <div className="p-5 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Figma UI — Left Sidebar
                  </p>
                </div>
                
              </div>
              <div className="p-5 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Figma UI — Right Sidebar
                  </p>
                </div>
                
              </div>
              <div className="p-5 flex items-center justify-between hover:">
                <div className=" flex items-center gap-2">
                <div>
                    <Youtube color="#475569" size={16}></Youtube>
                  </div>
                  <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[Poppins] text-slate-800 line-clamp-1">
                    Frames
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculam;
