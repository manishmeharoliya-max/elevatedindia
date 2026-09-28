import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    id: 1,
    tag: "BY ROAD",
    title: "The Ground Fleet",
    description:
      "Chauffeur-driven luxury sedans, touring SUVs, private coaches and caravans — owned, maintained and operated by our experienced team for over two decades.",
    button: "Explore Fleet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfS1FVE_WNptl3TWWHtExkopSkIEqqnR5dxAqb61g79ptXfDOlpuy5nvw&s=10", // replace with your image
  },
  {
    id: 2,
    tag: "BY AIR",
    title: "Private Air Charter",
    description:
      "Private jets and helicopter charters across India and Nepal, coordinated with licensed aviation partners for seamless luxury travel.",
    button: "Explore Wings",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNC0XKXQGy1Eq_bym1XPiciJEjm8Ct9mfOMfI0OFfAGQEWGxxEiMOnOU&s=10", // replace with your image
  },
];

export default function JourneyServices() {
  return (
    <section className="bg-[#11161D] py-10">
      <div className="max-w-7xl mx-auto px-2">
        {/* Heading */}

        <div className="max-w-3xl mb-10">
          <span className="text-[#B89B5E] uppercase tracking-[5px] text-xs font-semibold">
            In Motion
          </span>

          <h2 className="mt-1 text-xl md:text-2xl font-serif text-white leading-tight">
            Every mile of the
            <br />
            journey, ours.
          </h2>

          <p className="mt-2 text-gray-400 text-lg leading-6 max-w-xl">
            The road and the sky, held to the same standard as the itinerary —
            one desk, one accountable house.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#1A2028] transition-all duration-500 hover:border-[#B89B5E] hover:-translate-y-2"
            >
              {/* Image */}

              <div className="overflow-hidden h-[240px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-5">
                <span className="text-[#B89B5E] uppercase tracking-[4px] text-xs font-semibold">
                  {service.tag}
                </span>

                <h3 className="mt-2 text-md font-serif text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-gray-400 leading-6">
                  {service.description}
                </p>

                <button className="group/btn mt-2 inline-flex items-center gap-2 text-[#B89B5E] uppercase tracking-[2px] text-sm">
                  {service.button}

                  <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
