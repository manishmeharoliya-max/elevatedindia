import {
  FaShieldHalved,
  FaStar,
  FaUsers,
  FaHeadset,
  FaQuoteLeft,
} from "react-icons/fa6";

const stats = [
  {
    number: "20+",
    label: "Years Experience",
    icon: FaShieldHalved,
  },
  {
    number: "568+",
    label: "5★ Reviews",
    icon: FaStar,
  },
  {
    number: "15",
    label: "Licensed Guides",
    icon: FaUsers,
  },
  {
    number: "24/7",
    label: "Support",
    icon: FaHeadset,
  },
];

const team = [
  {
    name: "Manu Singh",
    role: "Managing Director",
    image: "https://www.elevatedindia.com/images/ipt/manu.webp",
  },
  {
    name: "Gulab Singh",
    role: "Senior Guide",
    image: "https://www.elevatedindia.com/images/ipt/guide-gulabji.webp",
  },
  {
    name: "Hariom Sharma",
    role: "Licensed Guide",
    image: "https://www.elevatedindia.com/images/ipt/guide-hariomji.webp",
  },
  {
    name: "Narendra",
    role: "Licensed Guide",
    image: "https://www.elevatedindia.com/images/ipt/guide-narendra.webp",
  },
  {
    name: "Amit",
    role: "Chauffeur",
    image: "https://www.elevatedindia.com/images/ipt/driver-amit.webp",
  },
];

export default function GroundOperations() {
  return (
    <section className="bg-[#111111] text-white py-10">
      <div className="max-w-7xl mx-auto px-3">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[2px] text-amber-400 text-sm">
            Trusted Hands
          </span>

          <h2 className="text-xl md:text-2xl font-serif mt-2">
            Ground Operations
            <br />
            & Logistics
          </h2>

          <p className="mt-1 text-gray-400 leading-4">
            Every Elevated India journey runs on decades of trusted
            operations, experienced guides, premium chauffeurs and
            personalized support from arrival to departure.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="bg-zinc-900 rounded-xl border border-zinc-800 p-4 hover:border-amber-400 duration-300"
              >
                <Icon className="text-amber-400 text-xl mb-2" />

                <h3 className="text-xl md:text-2xl font-light">
                  {item.number}
                </h3>

                <p className="mt-2 text-gray-400">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Quote + Team */}
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <div>
            <FaQuoteLeft className="text-amber-400 text-xl mt-10 mb-1" />

            <p className="text-md md:text-xl mt-10 leading-6 italic text-zinc-200">
              After more than two decades operating journeys across India,
              every relationship we've built—from chauffeurs to hotels—is
              part of the experience our guests remember.
            </p>

            <div className="mt-12">
              <h4 className="text-xl font-semibold">
                Manu Singh
              </h4>

              <p className="uppercase tracking-widest text-amber-400 text-sm mt-2">
                Managing Director
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-5">
              Meet The Team
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-400 hover:-translate-y-2 duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-3">
                    <h4 className="font-semibold">
                      {member.name}
                    </h4>

                    <p className="text-sm text-gray-400 mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <h3 className="text-center text-xl font-serif mb-5">
            Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "IATO Member",
              "Government Recognised",
              "Official Rajasthan Tourism Partner",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 text-center hover:border-amber-400 duration-300"
              >
                <FaShieldHalved className="mx-auto text-amber-400 text-xl" />

                <h4 className="mt-2 text-md font-medium">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
