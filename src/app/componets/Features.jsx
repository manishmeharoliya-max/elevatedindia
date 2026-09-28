"use client";

import {
  FaCompass,
  FaGem,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaCompass,
    title: "Deep Local Intelligence",
    description:
      "Our experts unlock hidden India through rare local connections, authentic culture, and decades of on-ground knowledge.",
  },
  {
    icon: FaGem,
    title: "Curated Experiences",
    description:
      "Every journey is personally handcrafted with luxury stays, private access, and unforgettable experiences.",
  },
  {
    icon: FaShieldAlt,
    title: "Complete Privacy",
    description:
      "Travel discreetly with complete confidentiality, private logistics, and personalised concierge support.",
  },
];

export default function Features() {
  return (
    <section className="relative bg-[#15120E] py-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A34A]/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C9A34A] text-sm">
            Why Elevated India
          </span>

          <h2 className="mt-2 text-2xl md:text-2xl font-serif text-white leading-tight">
            Crafted for Extraordinary Journeys
          </h2>

          <p className="mt-4 text-gray-400 leading-8">
            Every itinerary is thoughtfully designed with unmatched local
            expertise, authentic experiences, and world-class hospitality.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-4 mt-5">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-[#2C2C2C] bg-white/5 backdrop-blur-lg p-10 hover:border-[#C9A34A] hover:-translate-y-2 duration-500"
              >

                {/* Icon */}

                <div className="w-10 h-10 rounded-full bg-[#1F2848] border border-[#C9A34A]/40 flex items-center justify-center">

                  <Icon className="text-[#C9A34A] text-md" />

                </div>

                {/* Title */}

                <h3 className="text-white text-2xl font-serif mt-2 ">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-2 text-gray-400 leading-8">

                  {item.description}

                </p>

                {/* Button */}

                <button className="mt-2 flex items-center gap-3 text-[#C9A34A] group-hover:gap-5 duration-300">

                  Learn More

                  <FaArrowRight />

                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}