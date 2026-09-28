"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    title: "Royal Heritage",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg1hpc6i3qVY1pFgTkLdf6jbDJtMSGmLEp1qsJI9CXQqGf3AIv2uc2Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyjy1i_eVcfhQkZBeT2G0gzwf4-AyNbAwU0MPsIFMfh9e4XzYDUzlvH4&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80TAht5XU8740odRLEJSbn3ZQkon2ngurkAY6KHiIOCaic2LkiGbLepw&s=10",
    ],
    description:
      "Discover magnificent palaces, royal forts and timeless heritage experiences crafted exclusively for you.",
  },
  {
    title: "Wildlife Safari",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8D-phAztmBUNvCRa2QI8id1sxUlBdLK6PfwjG_I-50mT00iHeF5xouay0&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1bgHo1vi3gjlZGzjH0C5hGJy-CKEKG2iUcY38x8igrNKsBCkUGTj3fM&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEPuXqPpyN2eAbxb9XbnPVKsbg0kNgRpO0aXxQSG8U-jV3Dh5fgtqN3A&s=10",
    ],
    description:
      "Witness India's majestic wildlife with luxury safaris and private jungle adventures.",
  },
   {
    title: "Spiritual India",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhgl5mDSX2xneOjjqogteIavgP-V0RnxBpMaSweMsoQ&s=10",
      "https://images.pexels.com/photos/21048390/pexels-photo-21048390.jpeg?cs=srgb&dl=pexels-nitindeshwal009-21048390.jpg&fm=jpg",
      "https://media.worldnomads.com/social-share-images/india/spiritual-travel-social.jpg",
    ],
    description:
      "Explore sacred temples, spiritual retreats and centuries-old traditions across India.",
  },
  {
    title: "Backwaters & Coast",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL27Ewu7CbNOFePEgLQvaShB8OTRXkmieT_SpLRddGiPg3q-Dn5Sl2bwUs&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFvG1AnhUpgukf4xJd3Kz57omRq8OIL6Ks4oBiKMSVA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTpSlHNzVv8eCd3-eURNCqaHZQRgvHi23mjAEE3zMYqQyjMdyWhDrAKo&s=10",
    ],
    description:
      "Relax amidst tranquil backwaters, pristine beaches and luxurious coastal escapes.",
  },
  {
    title: "Romantic Escapes",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaQ2rlqr7pUslQceUVQ2KsBjigDHiyNJ_Iyc2y3E0rzSmlT2WSqbFb5fR&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIXJWC3ExgHlOG3f6fCLfbZXaAml50IBZgp1LxQQ91yEl6mZU6mC8xvHl&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFI6SffhpvJD9xV9aFZ7lz2MuLtPVAqZOxioSdN0XC_Z61Dd2iu4DB4VI&s=10",
    ],
    description:
      "Celebrate love with handpicked luxury honeymoon destinations and unforgettable moments.",
  },
   {
    title: "Art & Culture",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSfD2bwlWf1GxXoFs0cq42XD75Luvwt7qyw2TQDkCdJxEr5gupM7ufUM&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_bvh2-akbE-Hs4fDKQ_7T9aZW7LfkYSjCJ3J2bkr05k7JbqKnzB8pnQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-43enfe47nxIzNJE1mEWrawKAyIADk6aZ0nMvnmsAnPbfFTlIjJ7tkuY-&s=10",
    ],
    description:
      "Experience India's vibrant art, architecture, festivals and cultural heritage like never before.",
  },
  

];
 


export default function JourneyShape() {
  return (
    <section className="relative bg-[#141311] py-10 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A34A]/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[6px] text-[#C9A34A] text-sm font-medium">

            What We Curate

          </span>

          <h2 className="mt-1 text-3xl md:text-4xl font-serif text-white leading-tight">

            Shape Your Journey

          </h2>

          <div className="w-24 h-[2px] bg-[#C9A34A] mx-auto mt-2" />

          <p className="mt-2 text-lg leading-8 text-gray-400">

            Every unforgettable journey begins with emotion,
            curiosity and a desire to experience India beyond
            the ordinary.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

          {categories.map((item, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-[#1A1917] border border-white/10 hover:border-[#C9A34A] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#C9A34A]/20 transition-all duration-500"
            >

              {/* Image */}

              <div className="relative h-52 overflow-hidden">

  <Swiper
    modules={[Autoplay, Pagination]}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    pagination={{
      clickable: true,
    }}
    className="h-full w-full"
  >
    {item.images.map((img, i) => (
      <SwiperSlide key={i}>
        <div className="relative h-50">

          <Image
            src={img}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-[6000] group-hover:scale-110"
          />

        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

  {/* Badge */}

  <span className="absolute top-5 left-5 z-20 bg-[#C9A34A] text-black px-2 py-1 rounded-full text-sm font-semibold uppercase tracking-widest">
    Luxury
  </span>

  {/* Title */}

  <div className="absolute bottom-4 left-6 z-20">

    <h3 className="text-2xl font-serif text-white">
      {item.title}
    </h3>

  </div>

</div>

              {/* Content */}

              <div className="p-4">

                <p className="text-gray-400 leading-8">

                  {item.description}

                </p>

                <button className="group/btn mt-3 flex items-center gap-3 text-[#C9A34A] font-semibold">

  Explore Journey

  <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-2"/>

</button>
              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="text-center mt-5">

          <button className="group inline-flex items-center gap-2 text-md bg-[#C9A34A] hover:bg-[#D8B866] text-black font-semibold px-10 py-5 rounded-full transition-all duration-300">

            Start Planning Your Journey

            <FaArrowRight className="group-hover:translate-x-2 duration-300" />

          </button>

        </div>

      </div>

    </section>
  );
}