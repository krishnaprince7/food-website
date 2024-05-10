import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Book = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMassage] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

  
    if (!name || !email || !massage || !phone ||!date || !people) {
       
        const errorAlert = document.createElement('div');
        errorAlert.classList.add('error-alert');
        errorAlert.textContent = 'Please fill in all fields.';
        document.body.appendChild(errorAlert);

        
        setTimeout(() => {
            errorAlert.remove();
        }, 3000);

        return; 
    }
    setLoading(true);

  
    axios.post('https://food-website-sand-delta.vercel.app/register', { name, email, massage, phone, date, people })
        .then(result => {
            console.log(result);

            
            const successAlert = document.createElement('div');
            successAlert.classList.add('success-alert');
            successAlert.textContent = 'Table book    successfully!';
            document.body.appendChild(successAlert);

           
            setTimeout(() => {
              setLoading(false);
                successAlert.remove();
            }, 4000);

           
            setName('');
            setEmail('');
            setMassage('');
            setPhone('');
            setDate('');
            setPeople('');
        })
        .catch(err => {
            console.log(err);
            alert('Failed to register employee: ' + err.message);
            setLoading(false);
        });
};


  return (
    <div data-aos="fade-up" id='book' className='w-full  py-6 '>
      <div className='max-w-[1240px]  sm:px-12 px-4  py-4 mx-auto  '>
        <p className='text-[#37373f]  text-center text-[13px]'>BOOK A TABLE</p>
        <h1 className='text-3xl font-semibold text-center uppercase py-4'>Book <span className="text-red-500">Your Stay </span> With Us</h1>
        <div className='grid sm:grid-cols-2 grid-flow-row grid-cols-1'>
          <div className=''>
            <img src="/images/reservation.jpg" className='py-8' alt="" />
          </div>
          <div className='  sm:mx-10 flex flex-col gap-3 sm:px-10 sm:py-20 w-full  '>
            <form onSubmit={handleFormSubmit} className='flex gap-5 flex-col'>
              <input type="text" placeholder='Your Name' value={name} className='h-11 border-[1px] border-gray-400 outline-none px-3  hover:border-red-400' onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder='Your Email' value={email} className='h-11 border-[1px] border-gray-400 outline-none  px-3  hover:border-red-400' onChange={(e) => setEmail(e.target.value)} />
              <input type="number" placeholder='Your Phone' value={phone} className='h-11 border-[1px] border-gray-400 outline-none  px-3  hover:border-red-400' onChange={(e) => setPhone(e.target.value)} />
              <input type="text" placeholder='Date' value={date} className='h-11 border-[1px] border-gray-400 outline-none  px-3  hover:border-red-400' onChange={(e) => setDate(e.target.value)} />
              <input type="text" placeholder='# of people' value={people} className='h-11 border-[1px] border-gray-400 outline-none  px-3  hover:border-red-400' onChange={(e) => setPeople(e.target.value)} />
              <textarea name="" placeholder='Message me' value={massage} className='px-2 py-2 border-[1px] outline-none border-gray-400   hover:border-red-400 h-[6cm]' id="" onChange={(e) => setMassage(e.target.value)}></textarea>
              <div className=' px-3 mx-auto  '>
                <button type="submit" className='mx-auto bg-red-600 px-4 w-[4cm] py-2  sm:px-6 sm:py-3 rounded-3xl text-white cursor-pointer'>Book a Table</button>
              </div>
            </form>
          </div>
        </div>
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
