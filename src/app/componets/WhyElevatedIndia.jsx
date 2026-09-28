"use client";

import {
  FaCrown,
  FaRoute,
  FaGlobeAsia,
  FaUserTie,
  FaFeatherAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    number: "01",
    title: "Privileged Network",
    icon: FaCrown,
    description:
      "Exclusive access to royal palaces, heritage estates, luxury hotels and private experiences unavailable through conventional travel.",
  },
  {
    number: "02",
    title: "End-to-End Execution",
    icon: FaRoute,
    description:
      "Every transfer, stay and experience is seamlessly coordinated so you enjoy effortless luxury from arrival to departure.",
  },
  {
    number: "03",
    title: "Deep Cultural Insight",
    icon: FaGlobeAsia,
    description:
      "Travel with experts who bring India's history, traditions and hidden stories to life through authentic local connections.",
  },
  {
    number: "04",
    title: "Luxury Concierge",
    icon: FaUserTie,
    description:
      "A dedicated curator remains available throughout your journey, anticipating every request before you need to ask.",
  },
  {
    number: "05",
    title: "Tailored Experiences",
    icon: FaFeatherAlt,
    description:
      "Every itinerary is handcrafted around your interests, travel style and pace instead of predefined packages.",
  },
  {
    number: "06",
    title: "Absolute Privacy",
    icon: FaShieldAlt,
    description:
      "Your itinerary, moments and personal information remain completely confidential with world-class discretion.",
  },
];

export default function WhyElevatedIndia() {
  return (
    <section className="relative bg-[#141311] py-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C9A34A]/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C9A34A] text-sm">

            Why Choose Us

          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-serif text-white leading-tight">

            Why Elevated India

          </h2>

          <div className="w-20 h-[1px] bg-[#C9A34A] mx-auto mt-1" />

          <p className="mt-2 text-gray-400 leading-8 text-md">

            Luxury isn't simply where you travel—it's how every detail is
            thoughtfully designed around you.

          </p>

        </div>

        {/* Grid */}

        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[20px]
                border border-white/10
                bg-gradient-to-b from-[#1f1d1a] to-[#171614]
                p-4
                hover:border-[#C9A34A]/60
                hover:-translate-y-3
                duration-500"
              >

                {/* Hover Glow */}

                <div className="absolute inset-0 bg-[#C9A34A]/0 group-hover:bg-[#C9A34A]/5 duration-500" />

                {/* Number */}

                <div className="flex justify-between items-center">

                  <span className="text-2xl font-serif text-[#C9A34A]/20 group-hover:text-[#C9A34A]/35 duration-500">

                    {item.number}

                  </span>

                  <div
                    className="w-10 h-10 rounded-xl
                    bg-[#C9A34A]/10
                    border border-[#C9A34A]/20
                    flex items-center justify-center
                    group-hover:bg-[#C9A34A]
                    duration-500"
                  >

                    <Icon className="text-xl text-[#C9A34A] group-hover:text-[#141311]" />

                  </div>

                </div>

                {/* Title */}

                <h3 className="mt-2 text-xl font-serif text-white">

                  {item.title}

                </h3>

                {/* Line */}

                <div className="w-14 h-[2px] bg-[#C9A34A] mt-2 mb-2 group-hover:w-24 duration-500" />

                {/* Description */}

                <p className="text-gray-400 leading-4">

                  {item.description}

                </p>

                {/* Bottom */}

                <div className="mt-4 flex items-center gap-3">

                  <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-[#C9A34A]/40 duration-500" />

                  <span className="text-[#C9A34A] text-sm tracking-[3px] uppercase">

                    Luxury

                  </span>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}