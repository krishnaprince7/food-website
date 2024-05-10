import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [show,setshow] =useState(false)
    const hide = () =>{
        setshow(!show)
    }
  return (
    <>

    <div className='w-full bg-[#fff] border   fixed z-10  '>
    <div className='sm:max-w-[1240px]  w-full  px-4 sm:px-12 py-6 bg-[#fff] mx-auto rounded-md  '>
    <div className='flex justify-between'>
        <h1 className='text-3xl font-bold '>Yummy<span className='text-red-600'>.</span></h1>
        <ul className=' gap-20 text-gray-500 font-bold items-center sm:flex hidden cursor-pointer'>
            <li>
            <Link   to="home" spy={true}  smooth={true} offset={0} duration={1200}>Home</Link>
            </li>
            <li>
            <Link   to="menu" spy={true}  smooth={true} offset={-50} duration={1200}>Menu</Link>

            </li>
            <li>
            <Link   to="chefs" spy={true}  smooth={true} offset={-50} duration={1200}>Chefs</Link>

            </li>
            <li>
            <Link to='gallery'   spy={true}  smooth={true} offset={-50} duration={1200}>Gallery</Link>
            
            </li>
            <li>
            <Link to='contact'   spy={true}  smooth={true} offset={-50} duration={1200}>Contact</Link>
            
            </li>
        </ul>
        <div className='flex items-center gap-4 '>


            <li className='list-none bg-red-600 px-4 py-2 sm:px-6 sm:py-3 rounded-3xl text-white cursor-pointer'>
            <Link to='book'   spy={true}  smooth={true} offset={0} duration={1200}> Book a Table</Link>
            
           </li>
            <div onClick={hide} className='sm:hidden block' >
            {show ? null :<IoMenuSharp size={30}/> }
                
            </div>

        </div>
    </div>

    </div>

    </div> 
    <div className='grid grid-cols-2'>
    <div>
        
    </div>
    <div className={show ? 'bg-[#fff] border-2 h-screen w-full fixed    z-20 right-0 grid grid-cols-2 transition-all ease-in-out duration-700  ': "'bg-[#fff] border-2 h-screen w-[400px] fixed    z-20 right-[-12cm] grid grid-cols-2 transition-all ease-in-out duration-700  ':"}>

        <ul className=' flex flex-col p-6 pt-20  h-screen w-full gap-12 font-semibold text-gray-500 px-8'>
            <li  >
            <Link  onClick={hide}  to="home" spy={true}  smooth={true} offset={0} duration={1200}>Home</Link>

            </li>
            <li>
            <Link onClick={hide}  to="menu" spy={true}  smooth={true} offset={-50} duration={1200}>Menu</Link>

            </li>
            <li>
            <Link onClick={hide}   to="chefs" spy={true}  smooth={true} offset={-50} duration={1200}>Chefs</Link>

            </li>
            <li>
            <Link onClick={hide} to='gallery'   spy={true}  smooth={true} offset={-50} duration={1200}>Gallery</Link>

            </li>
            <li>
            <Link onClick={hide} to='contact'   spy={true}  smooth={true} offset={-50} duration={1200}>Contact</Link>

            </li>
        </ul>
        <div onClick={hide} className='flex relative left-[4cm] pt-8'>
        <RxCross2 size={30}/>

            
        </div>
    </div>
        
    </div>
    </>
  )
}

export default Navbar