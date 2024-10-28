import { ArrowLeft } from 'lucide-react';
import React from 'react'

const SamplePrevArrow = ({ onClick }) => {
    return (
        <>
            <button
                className="absolute  right-20 lg:right-24 lg:bottom-0 -bottom-5 -translate-y-1/2 bg-gray-200 rounded-full p-3  z-10 border-gray-300 group transition-colors"
                onClick={onClick}
            >
                <ArrowLeft className="w-6 h-6 text-[#FF9F00] group-hover:stroke-black" />
            </button>
        
        </>
      
    );
}

export default SamplePrevArrow