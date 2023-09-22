import React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  
  autoSlide = true,
  autoSlideInterval = 8000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  const slides = [
    "https://www.eckisil.com.br/_imagens/_banners/453692banner_2013_1.png",
    "https://www.eckisil.com.br/_imagens/_banners/883746banner_2013_6.png",
    "https://www.eckisil.com.br/_imagens/_banners/374885banner_2013_3.png",
    "https://www.eckisil.com.br/_imagens/_banners/437197banner_2013_5.png",    
    "https://www.eckisil.com.br/_imagens/_banners/208763banner_2013_4.png",
    "https://www.eckisil.com.br/_imagens/_banners/406809banner_2013_2.png",
    "https://www.eckisil.com.br/_imagens/_banners/179897banner03.png",
    "https://www.eckisil.com.br/_imagens/_banners/690056banner06.png",
    "https://www.eckisil.com.br/_imagens/_banners/706949banner05.png",
    "https://www.eckisil.com.br/_imagens/_banners/819290banner02.png"
    
  ];
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex  transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
       {slides.map((s) => (       
          <img src={s} alt="1" className="min-w-full " />
       
      ))}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-0">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-red"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-red"
        >
          <ChevronRight size={20} />
        </button>
      </div> */}

      <div className="absolute bottom-2 right-10 left-10">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
            
              className={`
              transition-all w-1 h-1  bg-[#1da1f2] rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50" }
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
  