import React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Galeria({
  
  autoSlide = true,
  autoSlideInterval = 15000,
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
    "https://www.eckisil.com.br/imagens/Fabrica_vista_do_alto.jpg",
    "https://www.eckisil.com.br/imagens/IMG_0002%20c.jpg",
    "https://www.eckisil.com.br/imagens/IMG_0034.jpg",
    "https://www.eckisil.com.br/imagens/foto%20003.jpg",
    "https://www.eckisil.com.br/imagens/IMG_0064.jpg"
    
  ];
  return (
    <div className="overflow-hidden rounded-2xl	transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 border-2 border-sky-500 shadow-2xl relative">
      <div
        className="flex  transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
       {slides.map((s) => (       
          <img src={s} alt="1" className="min-w-full min-h-full  " />
       
      ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
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
      </div>

      <div className="absolute bottom-2 right-10 left-10">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
            
              className={`
              transition-all w-1 h-1  bg-[#fff] rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50" }
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
  