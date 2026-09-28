"use client";

import { useEffect, useState } from "react";
import {
  FaArrowRight,
} from "react-icons/fa";

const slides = [
  {
    image: "https://www.elevatedindia.com/images/home/hero/rajasthan.webp ",
    video: "/videos/rajasthan.mp4",
    alt: "A Rajasthan palace at dusk",
  },
  {
    image: "https://www.elevatedindia.com/images/home/hero/gadisar-jaisalmer.webp",
    alt: "Gadisar Lake Jaisalmer",
  },
  {
    image: "https://www.elevatedindia.com/images/home/hero/udaipur-lake-palace.webp",
    alt: "Udaipur Lake Palace",
  },
];


export default function Hero() {

  const [active, setActive] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setActive((prev) =>
        (prev + 1) % slides.length
      );

    }, 7000);


    return () => clearInterval(timer);

  }, []);



  return (

    <section className="relative h-screen overflow-hidden bg-black">


      {/* Background Media */}


      {slides.map((slide,index)=>(


        <div
          key={index}
          className={`
          absolute
          inset-0
          transition-opacity
          duration-[1200ms]
          ease-in-out
          ${active === index ? "opacity-100 z-10":"opacity-0 z-0"}
          `}
        >


          <div
  className="
  absolute
  inset-0
  animate-[zoom_15s_ease-in-out_infinite]
  will-change-transform
  "
>


            <img
  src={slide.image}
  alt={slide.alt}
  className="
  h-full
  w-full
  object-cover
  brightness-110
  contrast-110
  saturate-110
  "
/>



            {
              slide.video && active === index && (

                <video
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  "
                />

              )
            }


          </div>


        </div>


      ))}




      {/* Dark Gradient Overlay */}


     <div
  className="
  absolute
  inset-0
  z-20
  bg-gradient-to-r
  from-black/65
  via-black/30
  to-transparent
  "
/>


<div
  className="
  absolute
  inset-0
  z-20
  bg-gradient-to-t
  from-black/40
  via-transparent
  to-transparent
  "
/>




      {/* Hero Content */}


      <div
        className="
        relative
        z-30
        max-w-7xl
        mx-auto
        h-full
        px-6
        lg:px-12
        flex
        items-center
        "
      >


        <div
          className="
          max-w-2xl
          "
        >


          <p
            className="
            uppercase
            tracking-[6px]
            text-[#B79649]
            text-sm
            mb-4
            "
          >
            Curators Of Extraordinary India
          </p>




          <h1
            className="
            font-serif
            text-white
            text-6xl
            md:text-8xl
            leading-[0.9]
            font-light
            "
          >

            Elevated
            <br />

            <span
              className="
              text-[#B79649]
              "
            >
              India.
            </span>

          </h1>




          <p
            className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-gray-300
            "
          >

            Bespoke journeys crafted with rare access,
            cultural depth, and uncompromising discretion.

          </p>




          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-5
            "
          >


            <a
              href="/contact"
              className="
              bg-[#B79649]
              hover:bg-[#d0ae62]
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              flex
              items-center
              gap-3
              transition
              "
            >

              Begin Your Journey

              <FaArrowRight />

            </a>




            <a
              href="/journeys"
              className="
              border
              border-white/40
              text-white
              px-4
              py-4
              rounded-full
              backdrop-blur-md
              hover:bg-white/10
              transition
              "
            >

              Explore Journeys

            </a>


          </div>



        </div>



      </div>





      {/* Scroll Indicator */}


      <div
        className="
        absolute
        right-10
        bottom-10
        z-40
        flex
        flex-col
        items-center
        text-white
        "
      >


        <span
          className="
          uppercase
          text-xs
          tracking-[5px]
          "
        >
          Scroll
        </span>


        <div
          className="
          mt-4
          h-12
          w-7
          border
          border-[#B79649]
          rounded-full
          flex
          justify-center
          "
        >

          <span
            className="
            w-1
            h-3
            bg-[#B79649]
            rounded-full
            mt-2
            animate-bounce
            "
          />

        </div>


      </div>



      <style jsx>{`

      @keyframes zoom {

        0%,100%{
          transform:scale(1);
        }

        50%{
          transform:scale(1.08);
        }

      }

      `}</style>


    </section>

  );
}
