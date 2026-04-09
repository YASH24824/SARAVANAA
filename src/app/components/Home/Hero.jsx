"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// ─── GLOBAL STYLE CONFIG ───────────────────────────────────────────────────────
const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  weight: "font-medium ",
};

// ─── BORDER RADIUS ────────────────────────────────────────────────────────────
const getBorderRadius = (radius = {}) => ({
  borderTopLeftRadius: radius.tl || "0px",
  borderTopRightRadius: radius.tr || "0px",
  borderBottomLeftRadius: radius.bl || "0px",
  borderBottomRightRadius: radius.br || "0px",
});

// ─── IMAGE CONFIG ─────────────────────────────────────────────────────────────
const IMAGE_CONFIG = [
  {
    id: "brown-shirt",
    src: "./womenss.png",
    alt: "Woman",
    top: "5%",
    left: "0%",
    width: "42%",
    height: "30%",
    radius: { tl: "10px", bl: "10px" },
    zIndex: 10,
    shadow: true,
  },
  {
    id: "necklace",
    src: "./neck.jpg",
    alt: "Jewellery",
    top: "0%",
    left: "20%",
    width: "80%",
    height: "75%",
    zIndex: 5,
  },
  {
    id: "beige-shirt",
    src: "./menss.png",
    alt: "Men",
    bottom: "8%",
    left: "0%",
    width: "42%",
    height: "30%",
    radius: { tl: "10px", bl: "20px", br: "10px" },
    zIndex: 10,
    shadow: true,
  },
  {
    id: "black-blazer",
    src: "./girls.png",
    alt: "Women",
    bottom: "8%",
    right: "0%",
    width: "42%",
    height: "30%",
    radius: { bl: "10px", br: "10px" },
    zIndex: 10,
    shadow: true,
  },
];

// ─── HERO TEXT ────────────────────────────────────────────────────────────────
const HERO_TEXT = {
  heading: ["Where", "Style", "Meets", "Elegance"],
  buttonLabel: "Shop Now",
};

// ─────────────────────────────────────────────────────────────────────────────

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 
      pt-6 md:pt-1 pb-6 md:pb-12 
      flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">

        {/* IMAGE FIRST ON MOBILE */}
        <div
          className={`w-full md:w-[60%] order-1 md:order-2 relative 
          h-[55vh] sm:h-[60vh] md:h-[680px] min-h-[350px] overflow-hidden 
          transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {IMAGE_CONFIG.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              style={{
                position: "absolute",
                top: img.top,
                left: img.left,
                right: img.right,
                bottom: img.bottom,
                width: img.width,
                height: img.height,
                objectFit: "cover",
                zIndex: img.zIndex,
                maxWidth: "100%",
                ...getBorderRadius(img.radius),
                boxShadow: img.shadow
                  ? "0 6px 20px rgba(0,0,0,0.15)"
                  : "none",
              }}
            />
          ))}
        </div>

        {/* TEXT */}
        <div
          className={`w-full md:w-[38%] order-2 md:order-1 text-center md:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1
            className={`text-2xl sm:text-3xl md:text-7xl lg:text-8xl ${FONT_STYLE.weight} ${FONT_STYLE.heading} text-black leading-[1.1] md:leading-[1.00] tracking-tight mb-4 md:mb-10`}
          >
            {/* MOBILE → SINGLE LINE */}
            <span className="block md:hidden">
              Where Style Meets Elegance
            </span>

            {/* DESKTOP → MULTI LINE */}
            <span className="hidden md:block">
              {HERO_TEXT.heading.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </h1>

       <button
  onClick={() => router.push("/mens")}
  className="mt-2 px-6 sm:px-7 py-2.5 sm:py-3 border-2 border-black rounded-full text-black font-bold text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300"
>
  {HERO_TEXT.buttonLabel}
</button>
        </div>

      </div>
    </section>
  );
};

export default Hero;