"use client";

const stats = [
  {
    number: "200+",
    label: "Private Journeys",
  },
  {
    number: "38",
    label: "Indian Regions",
  },
  {
    number: "20+",
    label: "Years of Access",
  },
  {
    number: "100%",
    label: "Bespoke • Never Packaged",
  },
];

export default function LuxuryStats() {
  return (
    <section className="relative overflow-hidden bg-[#141311] py-5">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A34A]/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-7">

        <div className="rounded-[30px] border border-[#C9A34A]/10 bg-[#26221B] backdrop-blur-xl overflow-hidden">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (

              <div
                key={index}
                className={`
                  group relative flex flex-col items-center justify-center
                  py-5 px-4 text-center
                  transition-all duration-500
                  hover:bg-[#2F2A22]
                  ${index !== stats.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-[#C9A34A]/10"
                    : ""
                  }
                `}
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-b from-[#C9A34A]/5 to-transparent" />

                {/* Number */}
                <h2 className="relative font-serif text-xl md:text-2xl text-[#C9A34A] group-hover:scale-110 transition-transform duration-500">

                  {item.number}

                </h2>

                {/* Divider */}
                <div className="relative mt-1 h-[2px] w-8 bg-[#C9A34A] group-hover:w-20 duration-500" />

                {/* Label */}
                <p className="relative mt-3 uppercase tracking-[4px] text-sm text-[#D7B76A]">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}