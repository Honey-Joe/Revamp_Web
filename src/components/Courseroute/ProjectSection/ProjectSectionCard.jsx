import React from 'react'
import { projecttag } from '../../../assets/image'

const ProjectSectionCard = (props) => {
  return (
    <div>
        <div className='w-[100%] grid grid-cols-1 gap-3 px-2 py-2 rounded-xl'  id='certi'>
            <div className='flex justify-center'>
                <img src={props.img} alt="projec image" />
            </div>
            <div className='flex flex-col gap-2 justify-center font-[Regular]'>
                <div className='flex items-start'>
                    <p className='bg-black px-2 py-1 text-[12px] rounded-lg text-white flex gap-3 justify-center items-center'>{props.tag} <img src={projecttag} alt="" /></p>
                </div>
                <div>
                    <p className='font-bold text-black text-[20px]'>{props.projecttitle}</p>
                </div>
                <div>
                    <p className='text-[12px] text-black'>{props.projectdesc}</p>
                </div>
                <div>
                    <p className='text-[12px] text-[#6A6A6A]'>by {props.doneby} {props.college}</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default ProjectSectionCard
