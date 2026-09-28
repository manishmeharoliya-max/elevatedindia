"use client";
import { motion } from "framer-motion";

import {
  FaLandmark,
  FaPaw,
  FaOm,
  FaWater,
  FaHeart,
  FaPalette,
  FaArrowRight,
  FaStar,
  FaAward,
  FaGlobeAsia,
  FaUsers,
} from "react-icons/fa";

const journeys = [
  {
    title: "Palaces & Heritage",
    icon: <FaLandmark />,
  },
  {
    title: "Wildlife Safari",
    icon: <FaPaw />,
  },
  {
    title: "Sacred India",
    icon: <FaOm />,
  },
  {
    title: "Backwaters",
    icon: <FaWater />,
  },
  {
    title: "Honeymoon",
    icon: <FaHeart />,
  },
  {
    title: "Art & Culture",
    icon: <FaPalette />,
  },
];

export default function JourneySelector() {
  return (
    <section className="bg-[#111111] py-5">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-[#C9A34A]">
            Discover India
          </span>

          <h2 className="mt-2 text-2xl text-white font-serif">
            Find Your Perfect Journey
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
            Handcrafted experiences designed for travellers seeking
            authenticity, exclusivity and unforgettable memories.
          </p>

        </div>

        {/* Journey Cards */}

        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mt-10">

          {journeys.map((item, index) => (

            <motion.div
  key={index}
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.12,
    ease: "easeOut",
  }}
  whileHover={{
    y: -12,
    scale: 1.03,
    transition: {
      duration: 0.25,
    },
  }}
  className="group border border-[#2d2d2d] rounded-2xl p-4 hover:border-[#C9A34A] hover:bg-[#171717] duration-300 cursor-pointer"
>

              <div className="w-5 h-5 rounded-full bg-[#C9A34A]/10 text-[#C9A34A] flex items-center justify-center text-2xl group-hover:scale-110 duration-300">

                {item.icon}

              </div>

              <h3 className="text-white text-md mt-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Explore curated luxury experiences crafted by experts.
              </p>

              <div className="flex items-center gap-2 mt-4 text-[#C9A34A]">

                Explore

                <FaArrowRight className="group-hover:translate-x-2 duration-300" />

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-10">

          <div className="border border-[#2d2d2d] rounded-xl p-6 flex items-center gap-4">

            <FaStar className="text-[#C9A34A] text-xl" />

            <div>

              <h3 className="text-white font-bold">
                5.0 Rating
              </h3>

              <p className="text-gray-400">
                568+ Reviews
              </p>

            </div>

          </div>

          <div className="border border-[#2d2d2d] rounded-xl p-6 flex items-center gap-4">

            <FaAward className="text-[#C9A34A] text-3xl" />

            <div>

              <h3 className="text-white font-bold">
                20+ Years
              </h3>

              <p className="text-gray-400">
                Experience
              </p>

            </div>

          </div>

          <div className="border border-[#2d2d2d] rounded-xl p-6 flex items-center gap-4">

            <FaGlobeAsia className="text-[#C9A34A] text-3xl" />

            <div>

              <h3 className="text-white font-bold">
                IATO
              </h3>

              <p className="text-gray-400">
                Certified
              </p>

            </div>

          </div>

          <div className="border border-[#2d2d2d] rounded-xl p-6 flex items-center gap-4">

            <FaUsers className="text-[#C9A34A] text-3xl" />

            <div>

              <h3 className="text-white font-bold">
                500+
              </h3>

              <p className="text-gray-400">
                Happy Guests
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="text-center mt-10">

          <button className="bg-[#C9A34A] hover:bg-[#d6b15d] duration-300 text-black font-semibold px-10 py-5 rounded-full inline-flex items-center gap-3">

            Plan My Journey

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}