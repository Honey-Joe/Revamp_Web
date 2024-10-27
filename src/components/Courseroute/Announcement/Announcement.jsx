import React from 'react'

const Announcement = () => {
  return (
    <>
        <div className='2xl:container mx-auto py-[20px] md:py-[40px] '>
            <div className='grid grid-cols-1 py-2 px-5 bg-white rounded-lg' id='certi'>
                <div className='flex justify-between py-2 items-center flex-wrap'>
                    <div>
                        <p className='font-[poppins] font-bold text-[16px] md:text-[20px]'>UI/UX Course Figma</p>
                    </div>
                    <div>
                        <p className='w-full py-2 px-2 sm:px-3 sm:py-3  bg-blue-700 font-[poppins] text-white rounded-md items-center text-[14px] md:text-[16px]'>16 Jun</p>
                    </div>
                </div>
                <div className='flex justify-between py-3'>
                    <div>
                        <p className='font-[poppins] text-gray-500'>Schedule: 08.00 PM - 9.00 PM</p>
                    </div>
                </div>
                <div>
                    <p className='font-[poppins] text-gray-500'>The class will be start at 8.00 pm</p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Announcement
