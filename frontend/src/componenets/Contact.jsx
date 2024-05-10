import React from "react";


const Contact = () => {
  return (
    <div className="w-full  py-6 ">
      <div className="max-w-[1240px]  sm:px-12 px-4 py-4 mx-auto  ">
        <p className="text-[#37373f]  text-center text-[13px]">CONTACT</p>
        <h1 className="text-3xl font-semibold text-center uppercase py-4">
          Need Help?<spna className="text-red-500">Contact Us</spna>
        </h1>

        <div>
          <address className="text-center text-xl font-bold">
            Para Rajajipuram, Lucknow - 226017
          </address>
          <div className="flex flex-col justify-center items-center  py-5">
            <iframe
              className="w-full "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28480.85099261399!2d80.85467677052533!3d26.836568752143094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe5d323b520b%3A0x2f011730d8522686!2sRajajipuram%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715185918787!5m2!1sen!2sin"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          
         


          
        </div>
      </div>
    </div>
  );
};

export default Contact;
