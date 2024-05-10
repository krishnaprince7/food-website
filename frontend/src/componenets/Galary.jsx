import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Galary = () => {
  useEffect(() => {
    AOS.init({duration:1200});
  }, [])
   
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const images = [
        "/images/gallery-1.jpg",
        "/images/gallery-2.jpg",
        "/images/gallery-4.jpg",
        "/images/gallery-7.jpg",
        "/images/gallery-8.jpg",
        
      ];

      useEffect(() => {
        const interval = setInterval(() => {
          if (!isPaused) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }
        }, 3000);
    
        return () => clearInterval(interval);
      }, [isPaused, images.length]);
    
      const handleImageClick = (index) => {
        setCurrentIndex(index);
      };
    
      const handleImageDoubleClick = () => {
        setIsPaused((prevState) => !prevState);
      };


  return (
     <div data-aos="fade-up" id="gallery" className='bg-[#EEEEEE]'>

    <div className='max-w-[1240px] py-7 sm:px-12 px-4 mx-auto'>
    <p className='text-[#37373f]  text-center text-[13px]'>GALLERY</p>
    <h1 className='text-3xl font-semibold text-center uppercase py-4'>Check <spna className="text-red-500">Our Gallery </spna></h1>

    <div className="relative ">
      <div className="flex justify-center items-center h-96 sm:h-80 md:h-96 lg:h-120 overflow-hidden">
        <div className="flex">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`transition-transform sm:ml-20  duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `translateX(-${100 * currentIndex}%)`,
              }}
              onClick={() => handleImageClick(index)}
              onDoubleClick={handleImageDoubleClick}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-12 flex justify-center items-center bg-black bg-opacity-50 cursor-pointer" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>
        {"<"}
      </div>
      <div className="absolute inset-y-0 right-0 w-12 flex justify-center items-center bg-black bg-opacity-50 cursor-pointer" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>
        {">"}
      </div>
    </div>
</div>
</div>
  )
}

export default Galary