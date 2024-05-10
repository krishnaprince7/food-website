import React from 'react'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Menu = () => {
  useEffect(() => {
    AOS.init({duration:1200});
  }, [])

  const [selectedMenu, setSelectedMenu] = useState("Starters");


  const menuItems = [
    {
      name: "Starters",
      dish:["kalu",
        "malu",
        "talu",
        "balu",
        "chau",
        "chau",
      ],
      images: [
        "/images/menu-item-1.png",
        "/images/menu-item-2.png",
        "/images/menu-item-3.png",
        "/images/menu-item-4.png",
        "/images/menu-item-5.png",
        "/images/menu-item-6.png",
     
      ],
    
    },
    {

      name: "Breakfast",
      dish:["kalu",
      "malu",
      "talu",
      "balu",
      "chau",
      "chau",
    ],
      images: [
        "/images/menu-item-1.png",
        "/images/menu-item-3.png",
        "/images/menu-item-2.png",
        "/images/menu-item-5.png",
        "/images/menu-item-6.png",
        "/images/menu-item-4.png",
     
      ],
    },
    {
      name: "Lunch",
      dish:["kalu",
      "malu",
      "talu",
      "balu",
      "chau",
      "chau",
    ],
      images: [
        "/images/menu-item-5.png",
        "/images/menu-item-1.png",
        "/images/menu-item-6.png",
        "/images/menu-item-3.png",
        "/images/menu-item-4.png",
        "/images/menu-item-2.png",
     
      ],
    },
    {
      name: "Dinner",
      dish:["kalu",
      "malu",
      "talu",
      "balu",
      "chau",
      "chau",
    ],

      images: [
        "/images/menu-item-3.png",
        "/images/menu-item-2.png",
        "/images/menu-item-6.png",
        "/images/menu-item-1.png",
        "/images/menu-item-5.png",
        "/images/menu-item-4.png",
     
      ],
    },
  ];

  const handleClick = (menuName) => {
    setSelectedMenu(menuName);
  };


  return (
    <div id='menu' data-aos="fade-up"  className='w-full  py-6 '>
    <div className='max-w-[1240px]  sm:px-12 px-4 py-4 mx-auto  '>
    <p className='text-[#37373f]  text-center text-[13px]'>OUR MENU</p>
    <h1 className='text-3xl font-semibold text-center uppercase py-4'>Check Our <spna className="text-red-500">Yummy Menu </spna> </h1>
    

    <div className="container mx-auto py-8">
      <ul className="flex justify-center ">
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.name}
            onClick={() => handleClick(menuItem.name)}
            className={`cursor-pointer px-4 py-2 ${
              selectedMenu === menuItem.name ? "bg-black  rounded-full text-white transition-all duration-500 ease-in-out text-xl " : ""
            }`}
          >
            {menuItem.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap  sm:gap-0 gap-[4cm] mt-[2cm] sm:mt-4 sm:flex-row flex-col">
        {menuItems.find((menuItem) => menuItem.name === selectedMenu).images.map((image, index) => (
            <>

            <img src={image} alt={`Image ${index}`} className="w-1/3 p-2 mx-auto sm:scale-75 scale-[2]" />
            
            
            
            
   
            </>
          ))}
           
      </div>
    </div>

    </div>

    </div>
  )
}

export default Menu