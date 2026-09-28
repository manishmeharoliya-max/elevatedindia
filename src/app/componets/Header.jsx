"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  HiOutlineGlobeAlt,
  HiOutlineChevronDown,
  HiOutlineBars3,
  HiOutlineSun,
} from "react-icons/hi2";


const leftMenu = [
  "Journeys",
  "Experiences",
  "Destinations",
];


const rightMenu = [
  "Inspires",
  "Concierge",
  "About",
];


export default function Header() {

  const [open, setOpen] = useState(false);


  return (

    <motion.header
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="
    fixed
    top-0
    left-0
    z-50
    w-full
    bg-[#141311]/95
    backdrop-blur-xl
    border-b
    border-[#2C2A27]
    shadow-[0_10px_40px_rgba(0,0,0,0.45)]
  "
>


      <div className="max-w-[1700px] mx-auto">


        <div
  className="
  h-16
  sm:h-18
  md:h-20
  flex
  items-center
  justify-between
  px-6
  "
>



          {/* Left */}

          <div className="flex items-center gap-10">


            {/* Language */}


            <button
              className="
              border 
              border-[#B79649]
              w-16 
              h-12 
              flex 
              items-center 
              justify-center 
              rounded-sm 
              hover:bg-[#B79649]
              duration-300
              "
            >

              <HiOutlineGlobeAlt
                className="text-white"
                size={22}
              />


              <HiOutlineChevronDown
                className="ml-1 text-white"
                size={18}
              />

            </button>




            <nav className="hidden lg:flex gap-12">


              {leftMenu.map((item)=>(

                <a
                  key={item}
                  href="#"
                  className="
                  uppercase 
                  tracking-[3px]
                  text-white 
                  text-sm 
                  font-semibold
                  relative 
                  group
                  "
                >

                  {item}


                  <span
                    className="
                    absolute 
                    left-0 
                    -bottom-2 
                    h-[2px]
                    w-0 
                    bg-[#C9A34A]
                    duration-300
                    group-hover:w-full
                    "
                  />

                </a>

              ))}


            </nav>


          </div>





         

{/* Center Logo */}

<div
  className="
  absolute
  left-1/2
  -translate-x-1/2
  flex
  items-center
  justify-center
  h-full
  "
>

  <img
    src="https://www.elevatedindia.com/logo-nav.png"
    alt="Elevated India"
    className="
    h-10
    sm:h-12
    md:h-14
    lg:h-16
    w-10
    sm:w-12
    md:w-14    lg:w-16
    object-cover
    rounded-full
    // border
    // border-[#B79649]
    p-1
    bg-white/10
    shadow-lg
    transition-all
    duration-300
    "
  />

</div>





          {/* Right */}


          <div className="flex items-center gap-10">


            <nav className="hidden lg:flex gap-12">


              {rightMenu.map((item)=>(


                <a
                  key={item}
                  href="#"
                  className="
                  uppercase
                  tracking-[3px]
                  text-white
                  text-sm
                  font-semibold
                  relative
                  group
                  "
                >

                  {item}


                  <span
                    className="
                    absolute 
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-[#C9A34A]
                    duration-300
                    group-hover:w-full
                    "
                  />

                </a>


              ))}


            </nav>





            <button
              className="
              hidden 
              lg:flex
              w-14
              h-14
              rounded-full
              border
              border-[#B79649]
              items-center
              justify-center
              hover:bg-[#B79649]
              duration-300
              "
            >

              <HiOutlineSun
                size={22}
                className="text-white"
              />

            </button>





            <button
              onClick={()=>setOpen(!open)}
              className="text-white"
            >

              <HiOutlineBars3
                size={38}
              />

            </button>


          </div>


        </div>


      </div>







      {/* Mobile Menu */}


      {
        open && (

          <div
            className="
            lg:hidden
            bg-black/80
            backdrop-blur-xl
            border-t
            border-white/20
            "
          >


            {[...leftMenu,...rightMenu].map((item)=>(


              <a
                key={item}
                href="#"
                className="
                block
                px-8
                py-5
                border-b
                border-white/10
                text-white
                uppercase
                tracking-widest
                "
              >

                {item}

              </a>


            ))}


          </div>

        )
      }


    </motion.header>

  );
}
