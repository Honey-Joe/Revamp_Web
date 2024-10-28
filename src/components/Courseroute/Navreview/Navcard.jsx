import { Star } from 'lucide-react'
import {  author, quote2, reviwe } from '../../../assets/image'

const Navcard = (props) => {
  return (
    <>
        <div className="bg-white p-4 lg:p-8 rounded-lg shadow-lg flex flex-col justify-center items-center gap-6 mx-3 w-[230px] lg:w-[300px]">
          <div className='flex justify-center'>
                <img src={author} className=" rounded-full w-[100px] h-[100px] lg:w-[100%] lg:h-[100%] " />

          </div>
                <div className=''>
                  <p className="text-gray-700 mb-4 font-[Poppins]" >
                    {props.desc}
                  </p>
                  <div className="flex gap-2 my-3">
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg font-[Poppins]">
                    {props.name}
                  </h4>
                  <p className="text-gray-500 font-[Poppins]">{props.desig}</p>
                </div>
              </div>
    </>
  )
}

export default Navcard
