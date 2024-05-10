import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

 

const Hero = () => {

  useEffect(() => {
    AOS.init({duration:1200});
  }, [])

  const images = [
    "/images/hero-img.png",
    "/images/image_hero_02.png",
    "/images/image_hero_03.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  return (
    <div id="home"  data-aos="zoom-in" className="bg-[#EEEEEE] py-6 w-full sm:h-screen ">
      <div className=" max-w-[1240px]  mt-36 px-12  pb-5  mx-auto grid md:grid-cols-2  sm:grid-cols-2 grid-cols-1 sm:gap-0  ">
        <div className="flex flex-col sm:order-1 order-2">
          <h2 className="text-[#37373f] font-semibold text-5xl py-3 sm:text-start text-center">
            Enjoy Your Healthy
          </h2>
          <h2 className="text-[#37373f] font-semibold text-5xl py-3 sm:text-start text-center">
            Delicious Food
          </h2>
          <p className="text-[#37373f] sm:pr-[5cm]  pr-0 text-[17px] py-4 sm:text-start text-center">
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur
            eveniet. Eum quas beatae cumque eum quaerat.
          </p>
          <div className="flex gap-5 my-4 sm:mx-0 mx-auto  ">
            <li className="list-none bg-red-600  px-2 py-2 sm:py-3 sm:px-8  rounded-3xl text-white cursor-pointer">
            <Link to='book'   spy={true}  smooth={true} offset={-50} duration={1200}> Book a Table</Link>

            </li>
            <div className="flex items-center ">
              <FaRegCirclePlay size={35} className="text-red-600" />
              <p className="sm:px-2 px-1  font-semibold ">Watch Video</p>
            </div>
          </div>
        </div>

        <div className=" sm:order order-1  ">
          <div className="relative sm:h-full h-[11cm]  mb-[4cm] w-full  ">
            <div className="flex absolute sm:top-10 top-[1cm]  w-full h-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-full scale-[1.2]  sm:scale-[1.3]  object-contain  absolute top-0 left-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
