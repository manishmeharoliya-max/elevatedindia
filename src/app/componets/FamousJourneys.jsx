 "use client"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const journeys = [
  {
    year: "1968",
    location: "Rishikesh",
    title: "The Beatles Way",
    image: "https://images.unsplash.com/photo-1650341259809-9314b0de9268?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "1966",
    location: "Varanasi",
    title: "The George Harrison Way",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "1983",
    location: "Lake Pichola",
    title: "The Octopussy Way",
    image: "https://images.unsplash.com/photo-1703092289078-ff03b771237c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "1974",
    location: "Himalayas",
    title: "The Steve Jobs Way",
    image: "https://images.unsplash.com/photo-1599751229070-854ae5c90869?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "1962",
    location: "Udaipur",
    title: "The Jackie Kennedy Way",
    image: "https://images.unsplash.com/photo-1695956353120-54ce5e91632b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FamousJourneys() {
  return (
    <section className="bg-[#141311] py-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-2">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-5">

          <span className="uppercase tracking-[5px] text-[#C6A35D] text-xs">
            INDIA INSPIRES
          </span>

          <div className="w-20 h-[2px] bg-[#C6A35D] mx-auto mt-2 mb-1"></div>

          <h2 className="text-white text-3xl md:text-4xl font-serif leading-tight">
            Famous Journeys,
            {/* <br /> */}
            Recomposed Privately
          </h2>

          <p className="mt-2 text-gray-400 text-lg leading-6">
            The Beatles in Rishikesh.
            A young Steve Jobs in the Himalayas.
            Jackie Kennedy on Lake Pichola.
            Journeys that changed their travellers —
            retraced privately to our standard.
          </p>

        </div>

        {/* Slider */}

        <div className="relative">

          <Swiper
            modules={[Navigation, EffectCoverflow, Autoplay]}
            effect={"coverflow"}
            centeredSlides
            loop
            grabCursor
            slidesPerView={"auto"}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -40,
              depth: 250,
              modifier: 2,
              scale: 0.88,
              slideShadows: false,
            }}
            className="!overflow-visible"
          >
            {journeys.map((item) => (
              <SwiperSlide
                key={item.title}
                className="!w-[240px] md:!w-[330px]"
              >
                <div className="group relative h-[500px] rounded-[30px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-4">

                    <p className="uppercase tracking-[2px] text-xs text-[#C6A35D]">
                      {item.year} • {item.location}
                    </p>

                    <h3 className="text-white text-xl font-serif mt-2">
                      {item.title}
                    </h3>

                    <button className="mt-2 uppercase tracking-[2px] text-sm text-[#C6A35D] hover:translate-x-2 duration-300">
                      Explore Journey →
                    </button>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Buttons */}

          {/* <button className="prevBtn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300">

            <FaArrowLeft />

          </button>

          <button className="nextBtn absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300">

            <FaArrowRight />

          </button> */}

        </div>

      </div>

    </section>
  );
}
