"use client";

import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-[#F8F4ED] py-10">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A34A]/10 blur-[180px]" />

      {/* Decorative Circles */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-[#C9A34A]/10" />
      <div className="absolute bottom-10 right-20 w-52 h-52 rounded-full border border-[#C9A34A]/10" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Quote Icon */}

        <div className="flex justify-center">

          <div className="w-10 h-10 rounded-full bg-[#1E2A4A] shadow-xl flex items-center justify-center">

            <FaQuoteLeft className="text-[#C9A34A] text-md" />

          </div>

        </div>

        {/* Small Label */}

        <p className="mt-4 uppercase tracking-[6px] text-[#C9A34A] text-sm font-medium">
          Our Philosophy
        </p>

        {/* Heading */}

        <h2 className="mt-3 text-2xl md:text-2xl font-serif text-[#1A1A1A] leading-tight">

          Travel isn't about
          <br />

          <span className="italic text-[#C9A34A]">
            collecting destinations.
          </span>

        </h2>

        {/* Quote */}

        <p className="mt-6 text-xl md:text-xl italic leading-[1.8] text-[#3A3A3A] font-serif">

          “India is not a destination to be efficiently toured.
          It is an experience to be gradually,
          intimately, and personally understood.”

        </p>

        {/* Divider */}

        <div className="flex items-center justify-center gap-3 mt-8">

          <div className="w-20 h-[1px] bg-[#C9A34A]" />

          <span className="uppercase tracking-[6px] text-[#C9A34A] text-sm">

            Elevated India Philosophy

          </span>

          <div className="w-20 h-[1px] bg-[#C9A34A]" />

        </div>

        {/* Description */}

        <p className="mt-5 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">

          Every itinerary begins with a conversation—not a package.
          We design journeys around your interests, pace, and curiosity,
          creating experiences that feel deeply personal rather than simply luxurious.

        </p>

        {/* CTA */}

        <button className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#1E2A4A] px-8 py-4 text-white hover:bg-[#28365E] transition-all duration-300">

          Discover Our Philosophy

          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />

        </button>

      </div>

    </section>
  );
}