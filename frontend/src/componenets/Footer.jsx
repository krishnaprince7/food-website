import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div id="contact" className="bg-[#1f1f24] py-6">
        <div className="max-w-[1240px]  sm:px-12 px-4 py-4 mx-auto  ">
          <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-4 gap-10 px-4">
            <div className="flex text-white  gap-3">
              <IoLocationSharp size={30} />
              <div className="flex flex-col gap-2">
                <h1 className="text-[17px] font-bold">Address</h1>
                <p className="text-gray-300">Para, Rajaipuram, Lucknow</p>
              </div>
            </div>

            <div className="flex text-white  gap-3">
              <IoCall size={30} />
              <div className="flex flex-col gap-2">
                <h1 className="text-[17px] font-bold">Reservations</h1>
                <p className="text-gray-300">phone:+91 830302198</p>
              </div>
            </div>

            <div className="flex text-white  gap-3">
              <MdAccessTime size={30} />
              <div className="flex flex-col gap-2">
                <h1 className="text-[17px] font-bold">Opening Hours</h1>
                <p className="text-gray-300">
                  <spna className="font-semibold">Mon-Sat: 11AM</spna> - 23PM
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex text-white  gap-3">
              <IoLocationSharp size={30} />
              <div className="flex flex-col gap-2">
                <h1 className="text-[17px] font-bold">Follow Us</h1>
                <div className="flex gap-3">
                  <div className="border border-gray-400 rounded-full px-2 py-2 cursor-pointer">
                    <IoLogoLinkedin
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        );
                      }}
                      size={20}
                    />
                  </div>
                  <div className="border border-gray-400 rounded-full px-2 py-2 cursor-pointer">
                    <FaInstagram
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg=="
                        );
                      }}
                      size={20}
                    />
                  </div>
                  <div className="border border-gray-400 rounded-full px-2 py-2 cursor-pointer">
                    <FaGithub
                      onClick={() => {
                        window.open("https://github.com/krishnaprince7");
                      }}
                      size={20}
                    />
                  </div>
                  <div className="border border-gray-400 rounded-full px-2 py-2 cursor-pointer2">
                    <FaFacebook
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/profile.php?id=100016002570229"
                        );
                      }}
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 ">
            <hr className="bg-gray-500" />
          </div>
          <div className="text-gray-300 flex flex-col gap-1">
            <h1 className="text-center text-[14px]">
              © Copyright <span className="font-bold">Yummy.</span> All Rights
              Reserved
            </h1>
            <p className="text-center text-[14px]">
              Designed by <span className="font-semibold">krishna</span>
            </p>
            <div className="fixed  right-5 bottom-3 z-10 border px-3 py-3 cursor-pointer rounded-full bg-red-600 border-red-600 ">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1200}
              >
                <FaArrowUp className="text-white" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

