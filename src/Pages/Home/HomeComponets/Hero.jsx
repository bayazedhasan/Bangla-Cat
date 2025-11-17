import React, { useState, useEffect } from "react";
import useData from '../../../hooks/useData.js';

const Hero = () => {
  const { slides } = useData();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return; 
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides]); 

  if (!slides || slides.length === 0) {
    return <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute flex flex-col md:items-start items-center 
              left-5 md:left-20 lg:left-60 top-[20%] md:top-[25%] lg:top-[30%]
              w-[90%] md:w-[70%] lg:w-auto">

              <p className="text-[#FAB600] text-sm md:text-lg font-bold">{s.title}</p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold py-2 text-white">{s.heading}</h1>
              <p className="text-sm md:text-lg lg:text-xl 
                w-full md:w-100 lg:w-130 
                leading-6 md:leading-8 font-semibold text-center md:text-start text-white pb-4">{s.desc}</p>
              <div className="border duration-300 cursor-pointer w-40 md:w-45
                text-center text-xs md:text-sm font-bold
                hover:text-black p-2 hover:bg-[#FAB600] border-white hover:border-gray-300">
                <button className="text-white">GET INFORMATION</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
