import { ArrowRight, Book, Star, Users } from 'lucide-react'
import React from 'react'

const FullstackContent = (props) => {
  return (
    <div className="2xl:container ">
        <div className="w-[100%] hover:scale-105 hover:shadow-2xl transition shadow-lg mx-auto grid grid-cols-1 gap-3 bg-white py-5 px-4 rounded-xl mb-10" id="certi">
          <div>
            <div>
              <img src={props.imgurl} alt="coures image" className="rounded-lg w-full h-full object-contain"/>
            </div>
          </div>
          <div className="flex gap-2 items-center" >
            <div className="flex gap-1">
            <Star size={16} color="#1176F0" strokeWidth={0.75} />
            <Star size={16} color="#1176F0" strokeWidth={0.75} />

            <Star size={16} color="#1176F0" strokeWidth={0.75} />

            <Star size={16} color="#1176F0" strokeWidth={0.75} />

            <Star size={16} color="#1176F0" strokeWidth={0.75} />

            </div>
            <div>
              <p className="font-[poppins] text-[14px] text-[#6b7385] font-medium">({props.review} reviews)</p>
            </div>
          </div>
          <div>
            <p className="font-[poppins] text-[22px] text-black hover:text-[#1176F0] font-bold">{props.coursetitle}</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <div>
              <Book size={16} color="#6b7385" strokeWidth={0.75} />              
              </div>
              <div>
                <p className="font-[poppins] text-[#6b7385] text-[14px] ">{props.lesson} Lessons</p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <div>
                <Users size={16} color="#6b7385" strokeWidth={0.75}></Users>
              </div>
              <div>
                <p className="font-[poppins] text-[#6b7385] text-[14px] ">{props.stud} Students</p>
              </div>
            </div>
          </div>
          <div>
            <p  className="font-[poppins] text-[#6b7385] text-[17px]">{props.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-[poppins] font-bold text-[20px]">$ {props.price}</p>
            </div> 
            <div>
              <div>
              <div
                className="flex items-center justify-center pt-1 pb-3  group relative duration-300 cursor-pointer"
                id="an"
              >
                <div className="">
                  <p className="font-[poppins]  text-black text-[14px] group-hover:text-[#1176F0] flex gap-2">
                    Learn More <ArrowRight></ArrowRight>
                  </p>
                </div>
                <div className=" text-slate-600 group-hover:text-[#1176F0] bg-black"></div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default FullstackContent
