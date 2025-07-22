import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsCounter = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 ,live: true, once: false });

    const counters = document.querySelectorAll(".counter");
    const speed = 300;

    const animateCount = (el) => {
      const target = +el.getAttribute("data-target");
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          el.textContent = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = target;
        }
      };
      updateCount();
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  }, []);

  const stats = [
    { label: "Cases Completed", value: 1224 },
    { label: "Team Members", value: 32 },
    { label: "Years Experience", value: 15 },
    { label: "Satisfied Customers", value: 1475 },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white text-black font-poppins mt-28">
        {/* Background Image */}
        <img
          src="https://storage.googleapis.com/a1aa/image/b87ee4ca-03bd-447b-ce83-7f24f79ac05a.jpg"
          alt="Office background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          loading="lazy"
        />

        {/* Overlay Container */}
        <div className="relative z-10 bg-[#12A652]/20 py-20 px-4 sm:px-10 flex flex-wrap justify-center  gap-10 text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="text-center w-48 sm:w-56"
            >
              <h2
                className="counter text-5xl sm:text-6xl font-extrabold text-[#19CAB7] drop-shadow-lg"
                data-target={stat.value}
              >
                0
              </h2>
              <p className="mt-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default StatsCounter;
