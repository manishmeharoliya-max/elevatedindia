"use client";

export default function SignatureHeading() {
  return (
    <section className="relative overflow-hidden bg-[#141311] py-10">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A34A]/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C9A34A]/5 blur-[120px]" />
      <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-[#C9A34A]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-2 text-center">

        {/* Small Title */}
        <span className="inline-flex items-center gap-4 uppercase tracking-[8px] text-[#C9A34A] text-sm font-medium">

          <span className="h-px w-8 bg-[#C9A34A]" />

          Our Signature Experiences

          <span className="h-px w-12 bg-[#C9A34A]" />

        </span>

        {/* Main Heading */}
        <h2 className="mt-2 font-serif text-2xl leading-tight text-white md:text-4xl">

          Journeys of

          <span className="block mt-1 text-[#E7DCC5]">
            Rare Distinction
          </span>

        </h2>

        {/* Divider */}
        <div className="mx-auto mt-4 h-[2px] w-28 bg-gradient-to-r from-transparent via-[#C9A34A] to-transparent" />

        {/* Description */}
        <p className="mx-auto mt-4 max-w-3xl text-md leading-9 text-gray-400 md:text-md">

          Every itinerary is individually designed around your pace,
          passions and personality. Rather than offering predefined
          packages, we curate immersive experiences that reveal India's
          finest heritage, wilderness and culture with exceptional
          access and uncompromising luxury.

        </p>

        {/* Quote */}
        <div className="mt-5">

          <p className="font-serif italic text-2xl text-[#C9A34A]/90">

            "Luxury is not where you stay.
            It's how deeply you experience."

          </p>

        </div>

      </div>
      {/* Featured Journeys */}
      {/* Featured Journeys */}

<div className="mt-10 grid lg:grid-cols-2 gap-8">

  {/* Card 1 */}
  <div className="group ml-2 relative h-[650px] overflow-hidden rounded-[30px] cursor-pointer">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-abeg9-8EC5Eucruk3iuQLd7fklCCEXH8yN0pewBxzd4EK6y7fSL7-ds&s=10"
      alt=""
      className="h-full w-full object-cover duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute top-6 left-6">
      <span className="rounded-full bg-[#C9A34A] px-4 py-1 text-md uppercase tracking-[3px] text-black font-semibold">
        Featured Journey
      </span>
    </div>

    <div className="absolute bottom-8 left-8 right-8">
      <p className="uppercase tracking-[1px] text-[#C9A34A] text-sm">
        Central India Reserves • 8–10 Days
      </p>

      <h3 className="mt-2 font-serif text-4xl text-white">
        The Wild Heart of India
      </h3>

      <p className="mt-4 text-gray-300 leading-8">
        Private safari vehicles, luxury jungle lodges and expert naturalists across Kanha &
        Bandhavgarh.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Wildlife", "Luxury Lodges", "Private Safari"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>

      <button className="mt-6 rounded-full border border-[#C9A34A] px-6 py-3 text-[#C9A34A] hover:bg-[#C9A34A] hover:text-black transition">
        Explore Journey →
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group mr-2 relative h-[650px] overflow-hidden rounded-[30px] cursor-pointer">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypn_q7dnInjYHdjZwWVCxjydnRXBtkt3wM8KD7xjd1N0naCyhe8v755Q&s=10"
      alt=""
      className="h-full w-full object-cover duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute top-6 left-6">
      <span className="rounded-full bg-[#C9A34A] px-4 py-1 text-md uppercase tracking-[3px] text-black font-semibold">
        Signature Experience
      </span>
    </div>

    <div className="absolute bottom-8 left-8 right-8">
      <p className="uppercase tracking-[1px] text-[#C9A34A] text-sm">
        Rajasthan & Nepal • 16 Days
      </p>

      <h3 className="mt-2 font-serif text-4xl text-white">
        Palace On Wheels
      </h3>

      <p className="mt-4 text-gray-300 leading-8">
        Journey through India's royal heritage aboard the world's most luxurious train.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Luxury Train", "Royal Suites", "Fine Dining"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>

      <button className="mt-6 rounded-full border border-[#C9A34A] px-6 py-3 text-[#C9A34A] hover:bg-[#C9A34A] hover:text-black transition">
        Explore Journey →
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group ml-2 relative h-[650px] overflow-hidden rounded-[30px] cursor-pointer">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBO9LpoC83dOdEqjaDng2mnQT4rLyrM8-LZN0GMU0oRc9mqZGkFsYvMna&s=10"
      alt=""
      className="h-full w-full object-cover duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute top-6 left-6">
      <span className="rounded-full bg-[#C9A34A] px-4 py-1 text-md uppercase tracking-[3px] text-black font-semibold">
        Coastal Escape
      </span>
    </div>

    <div className="absolute bottom-8 left-8 right-8">
      <p className="uppercase tracking-[1px] text-[#C9A34A] text-sm">
       Kerala Backwaters  • 7 Days
      </p>

      <h3 className="mt-2 font-serif text-4xl text-white">
        Serenity of Kerala
      </h3>

      <p className="mt-4 text-gray-300 leading-8">
        Cruise through peaceful backwaters, stay in luxury resorts and discover authentic Kerala.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Houseboat", "Ayurveda", "Private Cruise"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>

      <button className="mt-6 rounded-full border border-[#C9A34A] px-6 py-3 text-[#C9A34A] hover:bg-[#C9A34A] hover:text-black transition">
        Explore Journey →
      </button>
    </div>
  </div>

  {/* Card 4 */}
  <div className="group mr-2 relative h-[650px] overflow-hidden rounded-[30px] cursor-pointer">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5rEcTM7V7q4ubmciP62CenRrdvGJxg5LnFnw0-kMTaPF3gif84Q2zTk&s=10"
      alt=""
      className="h-full w-full object-cover duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute top-6 left-6">
      <span className="rounded-full bg-[#C9A34A] px-4 py-1 text-md uppercase tracking-[3px] text-black font-semibold">
        Himalayan Retreat
      </span>
    </div>

    <div className="absolute bottom-8 left-8 right-8">
      <p className="uppercase tracking-[1px] text-[#C9A34A] text-sm">
        North India & Nepal • 12 Days
      </p>

      <h3 className="mt-2 font-serif text-4xl text-white">
        Golden Triangle with Kathmandu
      </h3>

      <p className="mt-4 text-gray-300 leading-8">
        Experience India's iconic cities before escaping to the breathtaking Himalayas.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Heritage", "Luxury Hotels", "Mountain Views"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>

      <button className="mt-6 rounded-full border border-[#C9A34A] px-6 py-3 text-[#C9A34A] hover:bg-[#C9A34A] hover:text-black transition">
        Explore Journey →
      </button>
    </div>
  </div>

</div>



    </section>
  );
}