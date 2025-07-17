import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'aos/dist/aos.css';
import { Images } from '../../assets/images/images'; // Ensure path is valid

const logos = [
  Images.logoSlider1, Images.logoSlider2,
  Images.logoSlider1, Images.logoSlider2,
  Images.logoSlider1, Images.logoSlider2,
  Images.logoSlider1, Images.logoSlider2,
  Images.logoSlider1, Images.logoSlider2,
  Images.logoSlider1, Images.logoSlider2,
];

const LogoSlider = () => {
  useEffect(() => {
    AOS.init({ once: true });
    // Reinitialize after Swiper renders
    const timer = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-10 px-6 md:px-12 mb-16">
      {/* Heading */}
      <div
        className="text-center mb-16 px-5 py-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-[1.3rem] sm:text-2xl text-[#11BFAE] font-extrabold drop-shadow-md transition duration-300 hover:scale-105">
          We Collaborate With Leading Businesses
        </h2>
        <p
          className="text-lg sm:text-xl mt-4 text-black  transition duration-300 ease-in-out tracking-wide"
        >
          Dubai Business Connect Drives Digital Growth — And Lasting Success
        </p>
      </div>

      {/* Left-to-Right Swiper */}
      <div
        className="max-w-6xl mx-auto px-4 mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={`logo-ltr-${idx}`} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right-to-Left Swiper */}
      <div
        className="max-w-6xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, reverseDirection: true, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={`logo-rtl-${idx}`} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
