"use client";

import { useEffect, useState } from "react";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* ✅ GOOGLE FONTS + CUSTOM STYLES */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

          .section-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(24px, 5vw, 44px); /* 🔥 better mobile scaling */
            letter-spacing: 0.02em;
            color: #1a1a1a;
            font-weight: 500;
          }

          .section-description {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(15px, 3.5vw, 18px); /* 🔥 responsive text */
            color: #666;
            font-weight: 300;
            line-height: 1.7;
          }
        `}
      </style>

      <section
        id="about"
        className="w-full bg-[#f5f5f3] py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

          {/* FLEX CONTAINER */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">

            {/* LEFT SIDE */}
            <div
              className={`w-full md:w-[75%] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* TOP LINE */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-8 sm:w-10 h-[1px] bg-amber-500"></div>
                <span className="text-gray-500 text-xs sm:text-sm tracking-wide">
                  Since 2021
                </span>
              </div>

              <div className="space-y-8 sm:space-y-10">

                {/* OUR APPROACH */}
                <div>
                  <h2 className="section-title mb-2 sm:mb-3">
                    Our Approach
                  </h2>
                  <p className="section-description">
                    We provide affordable garments and trusted gold jewellery retail
                    solutions designed to serve families, local customers, and
                    festive shoppers—bridging the gap between fashion needs and
                    reliable jeweller purchases through quality products, fair
                    pricing, and customer-focused retail service.
                  </p>
                </div>

                {/* WHO WE ARE */}
                <div>
                  <h2 className="section-title mb-2 sm:mb-3">
                    Who We Are
                  </h2>
                  <p className="section-description">
                    We are a retail garments and jewellery store serving fashionable
                    clothing and trusted gold jewellery. With over 20 years of
                    industry experience, our business focuses on delivering quality
                    products, fair pricing, and reliable customer service.
                  </p>
                </div>

                {/* ESTABLISHED */}
                <div>
                  <h2 className="section-title mb-2 sm:mb-3">
                    Established
                  </h2>
                  <p className="section-description">
                    Established in 2021 near Usilampatti Bus Stand, our mission is
                    to meet the everyday and festive needs of local customers by
                    offering a wide variety of garments and jewellery under one
                    trusted retail destination.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE (IMAGE) */}
            <div
              className={`w-full md:w-[25%] transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <img
                src="/dukan.jpg"
                alt="Store"
                className="w-full h-[220px] sm:h-[280px] md:h-auto object-cover rounded-lg shadow-md"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;