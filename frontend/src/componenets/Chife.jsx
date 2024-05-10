import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Chife = () => {
  useEffect(() => {
    AOS.init({duration:1200});
  }, [])
  return (
    <div data-aos="fade-up"  id='chefs' className='bg-[#EEEEEE]'>
    <div className='max-w-[1240px] py-7 sm:px-12 px-4 mx-auto'>
    <p className='text-[#37373f]  text-center text-[13px]'>CHEFS</p>
    <h1 className='text-3xl font-semibold text-center uppercase py-4'>Our <spna className="text-red-500">Proffesional </spna> Chefs</h1>

    {/* Firt cheif */}
    <div  className='grid sm:grid-cols-3 grid-cols-1 gap-8 mt-9'>
    <div className="bg-white  pb-2 hover:scale-[1.1] transition-all ease-in-out duration-500">

    <img src="/images/chefs-1.jpg" className='rounded-lg' alt="" />
    <h1 className='text-[#37373f] text-center font-bold text-xl pt-2'>Walter White</h1>
    <p className='text-[#37373f]  text-center text-[15px] py-2'>Master Chef</p>
    <p className='text-center'>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
    </div>

    <div className="bg-white  pb-2 hover:scale-[1.1] transition-all ease-in-out duration-500">

    <img src="/images/chefs-2.jpg"  className='rounded-lg'alt="" />
    <h1 className='text-[#37373f] text-center font-bold text-xl pt-2'>Sarah Jhonson</h1>
    <p className='text-[#37373f]  text-center text-[15px] py-2'>Patissier</p>
    <p className='text-center'>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
    </div>

    <div className="bg-white  pb-2 hover:scale-[1.1] transition-all ease-in-out duration-500">

    <img src="/images/chefs-3.jpg" className='rounded-lg' alt="" />
    <h1 className='text-[#37373f] text-center font-bold text-xl pt-2'>William Anderson</h1>
    <p className='text-[#37373f]  text-center text-[15px] py-2'>Cook</p>
    <p className='text-center'>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.
    </p>
    </div>


    </div>
    



    </div>
  
    
    </div>
  )
}

export default Chife