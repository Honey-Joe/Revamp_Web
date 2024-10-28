import { ArrowRight } from 'lucide-react';
import React from 'react'

const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute right-4 lg:right-8 -bottom-5 lg:bottom-0 -translate-y-1/2 bg-gray-200 rounded-full p-3  z-10 border-gray-300 group transition-colors"
        onClick={onClick}
      >
        <ArrowRight className="w-6 h-6 text-[#FF9F00] group-hover:stroke-black " />
      </button>
    );
}

export default SampleNextArrow