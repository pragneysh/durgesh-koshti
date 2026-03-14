import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1G52Euo-LvS0bJgx7JsdXSR4RTmLsmnhbX0JE2FsEO0A/Hero",
    )
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  return (
    <section className="w-full h-[60vh] sm:h-[70vh] md:h-[85vh] relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[60vh] sm:h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center px-4 relative"
              style={{ backgroundImage: `url(${slide.Image})` }}
            >
              <div
                className="
                bg-black/50 border border-[#F5F5F5]/40
                px-4 py-5 sm:px-8 sm:py-7 md:px-14 md:py-10
                text-center text-white
                w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%]
                rounded-lg sm:rounded-xl md:rounded-2xl
                backdrop-blur-sm
                absolute bottom-10
                "
              >
                <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                  <span className="w-6 sm:w-10 md:w-16 h-[2px] bg-white"></span>

                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif italic tracking-wide">
                    {slide.Title}
                  </h1>

                  <span className="w-6 sm:w-10 md:w-16 h-[2px] bg-white"></span>
                </div>

                <p className="text-[11px] sm:text-sm md:text-base opacity-90 max-w-xl mx-auto leading-relaxed text-[#F5F5F5]">
                  {slide.Description}
                </p>

                <div className="flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-4 md:my-6">
                  <span className="w-5 sm:w-8 md:w-10 h-[1px] bg-white"></span>
                  <span className="text-xs sm:text-sm md:text-lg text-white">
                    ✦
                  </span>
                  <span className="w-5 sm:w-8 md:w-10 h-[1px] bg-white"></span>
                </div>

                <button
                  className="
                  border border-[#5BA69A]
                  px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3
                  text-xs sm:text-sm md:text-base
                  rounded-full tracking-wider
                  bg-transparent
                  hover:bg-[#5BA69A]
                  hover:text-white
                  transition
                  "
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
