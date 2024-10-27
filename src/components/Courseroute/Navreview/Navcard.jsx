import { Star } from 'lucide-react'
import {  quote2, reviwe } from '../../../assets/image'

const Navcard = () => {
  return (
    <>
        <div className='2xl:container '>
            <div className='w-[100%] grid grid-cols-1 px-1 md:px-6 gap-3 '>
              <div >
                <div className='px-10 py-10 shadow-xl flex flex-col gap-5 rounded-3xl my-4'>
                <div className='flex justify-center'>
                    <img src={quote2} alt="" />
                </div>
                <div>
                  <p className='text-center font-[Regular] text-[12px]'>Lorem ipsum dolor sit amet consectetur. A sapien donec lacus nunc integer vitae vitae. Gravida nulla in tincidunt lectus consectetur sed ante.</p>
                </div>
                <hr />
                <div className='flex justify-center gap-3'>
                  <Star size={16} color='#FF9F00' fill='#FF9F00'></Star>
                  <Star size={16} color='#FF9F00' fill='#FF9F00'></Star>
                  <Star size={16} color='#FF9F00' fill='#FF9F00'></Star>
                  <Star size={16} color='#FF9F00' fill='#FF9F00'></Star>
                  <Star size={16} color='#FF9F00' fill='#FF9F00'></Star>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                  <p className=' font-bold font-[Regular] text-center'>SUGANTH PV</p>
                  <p className=' font-[Regular] text-[14px] text-center'>SRI SAIRAM ENGINEERING COLLEGE</p>
                </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                  <div className='h-[3px] w-[143px]' id='review2'></div>
                  <div><img src={reviwe} alt="" /></div>
                  <div className='h-[3px] w-[143px]' id='review'></div>
                </div>
              </div>
            </div>
        </div> 
    </>
  )
}

export default Navcard
