"use client";

import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const events = [
  {
    title: "Pushkar Camel Fair",
    date: "November 1 – 5, 2026",
    note: "Private Camps • Limited Allocation",
    image: "https://plus.unsplash.com/premium_photo-1697729460658-6a831a518d2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Diwali Across The Palaces",
    date: "November 8, 2026",
    note: "Jaipur • Udaipur • Royal Celebrations",
    image: "https://images.unsplash.com/photo-1634899714428-1b1ce06b0130?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tiger Safari Season",
    date: "October – April",
    note: "Luxury Lodges • Private Safaris",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function LuxuryCalendar() {
  return (
    <section className="relative overflow-hidden bg-[#141311] py-10">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C9A34A]/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-3">

        {/* Heading */}

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <span className="uppercase tracking-[6px] text-[#C9A34A] text-sm">

              The Calendar

            </span>

            <h2 className="mt-2 text-xl md:text-2xl font-serif text-white leading-tight">

              Worth Planning
              
              A Year Ahead.

            </h2>

            <div className="mt-2 h-[2px] w-20 bg-[#C9A34A]" />

          </div>

          <button className="group inline-flex items-center gap-2 rounded-full border border-[#C9A34A] px-4 py-2 text-[#C9A34A] transition hover:bg-[#C9A34A] hover:text-black">

            View All Seasons

            <FaArrowRight className="duration-300 group-hover:translate-x-2" />

          </button>

        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {events.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#1B1A18] transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A34A]"
            >
              {/* Image */}

              <div className="relative h-52 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute left-3 top-3">

                  <span className="rounded-full bg-[#C9A34A] px-1 py-1 text-xs font-semibold uppercase tracking-[3px] text-black">

                    Upcoming

                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="p-4">

                <div className="flex items-center gap-3 text-[#C9A34A]">

                  <FaCalendarAlt />

                  <span className="text-sm uppercase tracking-[2px]">

                    {item.date}

                  </span>

                </div>

                <h3 className="mt-2 font-serif text-xl text-white">

                  {item.title}

                </h3>

                <p className="mt-2 leading-6 text-gray-400">

                  {item.note}

                </p>

                <button className="group/btn mt-4 flex items-center gap-2 text-[#C9A34A]">

                  Explore Event

                  <FaArrowRight className="duration-300 group-hover/btn:translate-x-2" />

                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-8 rounded-[30px] border border-[#C9A34A]/20 bg-gradient-to-r from-[#1C1A17] via-[#23201A] to-[#1C1A17] p-12 text-center">

          <span className="uppercase tracking-[4px] text-[#C9A34A] text-sm">

            Limited Availability

          </span>

          <h3 className="mt-2 font-serif text-xl text-white">

            Reserve Before The World Arrives

          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-lg leading-6 text-gray-400">

            Our signature departures have extremely limited availability.
            Secure your preferred dates with a private consultation before
            reservations open publicly.

          </p>

          <button className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#C9A34A] px-8 py-4 font-semibold text-black transition hover:bg-[#D7B86B]">

            Plan My Journey

            <FaArrowRight className="duration-300 group-hover:translate-x-2" />

          </button>

        </div>

      </div>
    </section>
  );
}