// app/women/page.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WomensCollection() {
  // All women's wear collections - different types of clothing and accessories
  const sections = [
    {
      title: "Evening Gowns",
      description: "Exquisite couture gowns that command attention, crafted for unforgettable evenings.",
      category: "Formal Wear",
      items: [
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80",
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
      ],
      names: ["Midnight Velvet Gown", "Silk Chiffon Dress", "Embellished Ball Gown", "Sequin Mermaid Dress", "Lace Column Dress"],
    },
    {
      title: "Designer Suits & Blazers",
      description: "Powerful silhouettes that blend sophistication with contemporary elegance.",
      category: "Power Wear",
      items: [
        "https://images.unsplash.com/photo-1591041719828-60e550030184?w=800&q=80",
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
        "https://images.unsplash.com/photo-1598623172979-6ee4e0dda9f2?w=800&q=80",
        "https://images.unsplash.com/photo-1591041719828-60e550030184?w=800&q=80",
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
      ],
      names: ["Cream Wool Blazer", "Pinstripe Power Suit", "Double-Breasted Blazer", "Tweed Jacket", "Silk Lapel Tuxedo"],
    },
    {
      title: "Cocktail Dresses",
      description: "Effortlessly chic dresses for every celebration, from day to night.",
      category: "Party Wear",
      items: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
        "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      ],
      names: ["Little Black Dress", "Floral Wrap Dress", "Satin Slip Dress", "Bodycon Midi", "Pleated Mini Dress"],
    },
    {
      title: "Luxury Tops & Blouses",
      description: "Impeccably crafted tops that elevate any ensemble with refined detail.",
      category: "Everyday Luxury",
      items: [
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
        "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
        "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
      ],
      names: ["Silk Satin Blouse", "Lace Detail Top", "Cashmere Sweater", "Off-Shoulder Top", "Beaded Mesh Top"],
    },
    {
      title: "Skirts & Trousers",
      description: "Architectural cuts and flowing lines for the modern woman.",
      category: "Bottoms",
      items: [
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
        "https://images.unsplash.com/photo-1591041719828-60e550030184?w=800&q=80",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
        "https://images.unsplash.com/photo-1591041719828-60e550030184?w=800&q=80",
      ],
      names: ["Pleated Midi Skirt", "Tailored Wool Pants", "Leather Pencil Skirt", "Wide Leg Trousers", "A-Line Mini Skirt"],
    },
    {
      title: "Luxury Footwear",
      description: "Step into perfection with our handcrafted heels, flats, and boots.",
      category: "Footwear",
      items: [
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
        "https://images.unsplash.com/photo-1549298920-e41d82d1ec1c?w=800&q=80",
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
      ],
      names: ["Stiletto Heels", "Leather Ankle Boots", "Ballet Flats", "Platform Sandals", "Knee High Boots"],
    },
    {
      title: "Accessories",
      description: "The perfect finishing touch - curated accessories that speak of understated luxury.",
      category: "Accessories",
      items: [
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      ],
      names: ["Diamond Drop Earrings", "Gold Chain Necklace", "Leather Handbag", "Silk Scarf", "Statement Cuff"],
    },
  ];

  const scrollRefs = useRef([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(null);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [animationFrame, setAnimationFrame] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const applyInertia = (container, vel) => {
    if (!container || Math.abs(vel) < 0.5) {
      setAnimationFrame(null);
      return;
    }
    
    container.scrollLeft -= vel;
    const newVelocity = vel * 0.95;
    setVelocity(newVelocity);
    
    const frame = requestAnimationFrame(() => applyInertia(container, newVelocity));
    setAnimationFrame(frame);
  };

  const handleMouseDown = (e, index) => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      setAnimationFrame(null);
    }
    
    const container = scrollRefs.current[index];
    setIsDragging(true);
    setActiveIndex(index);
    setVelocity(0);
    setLastX(e.pageX);
    
    setDragStart({
      x: e.pageX - container.offsetLeft,
      scrollLeft: container.scrollLeft
    });
    container.style.cursor = 'grabbing';
    container.style.scrollBehavior = 'auto';
  };

  const handleMouseMoveDrag = (e, index) => {
    if (!isDragging || activeIndex !== index) return;
    e.preventDefault();
    
    const container = scrollRefs.current[index];
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStart.x) * 1.2;
    container.scrollLeft = dragStart.scrollLeft - walk;
    
    const currentX = e.pageX;
    const deltaX = currentX - lastX;
    setVelocity(deltaX * 0.8);
    setLastX(currentX);
  };

  const handleMouseUp = () => {
    if (isDragging && Math.abs(velocity) > 0.5) {
      const container = scrollRefs.current[activeIndex];
      if (container) {
        applyInertia(container, velocity);
      }
    }
    
    setIsDragging(false);
    setActiveIndex(null);
    sections.forEach((_, index) => {
      if (scrollRefs.current[index]) {
        scrollRefs.current[index].style.cursor = 'grab';
        scrollRefs.current[index].style.scrollBehavior = 'smooth';
      }
    });
  };

  const scrollTo = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      return () => window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging, velocity, activeIndex]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        * {
          cursor: default;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          letter-spacing: 0.02em;
          color: #1a1a1a;
          font-weight: 500;
        }

        .section-description {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #666;
          font-weight: 300;
          line-height: 1.6;
        }

        .image-card {
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          cursor: grab;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0;
          width: 320px;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          will-change: transform;
        }

        .image-card:active {
          cursor: grabbing;
        }

        .image-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 35px rgba(0,0,0,0.08);
        }

        .image-card img {
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          width: 100%;
          height: 420px;
          object-fit: cover;
          will-change: transform;
        }

        .image-card:hover img {
          transform: scale(1.04);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          gap: 15px;
        }

        .image-card:hover .image-overlay {
          opacity: 1;
        }

        .view-btn {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          letter-spacing: 3px;
          color: white;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          padding: 12px 28px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          text-transform: uppercase;
          font-weight: 400;
        }

        .view-btn:hover {
          background: rgba(255, 255, 255, 0.22);
          transform: scale(1.05);
          letter-spacing: 4px;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .product-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          color: white;
          text-align: center;
          font-weight: 500;
          letter-spacing: 1px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .custom-cursor {
          position: fixed;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(30, 25, 22, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.12s ease, width 0.2s ease, height 0.2s ease;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 30px rgba(0,0,0,0.15);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .custom-cursor span {
          color: #FDFBF7;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 300;
          text-transform: uppercase;
        }

        .scroll-container {
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          user-select: none;
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
          overflow-y: hidden;
        }

        .scroll-container:active {
          cursor: grabbing;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .arrow-btn {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arrow-btn:hover {
          background: #8B4513;
          color: white;
          transform: translateX(5px);
        }

        .back-btn {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: rgba(255,255,255,0.15);
          transform: translateX(-5px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes zoomSlow2 {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }

        @keyframes zoomSlow3 {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }

        .animate-zoomSlow {
          animation: zoomSlow 20s ease-out forwards;
        }

        .animate-zoomSlow2 {
          animation: zoomSlow2 22s ease-out forwards;
        }

        .animate-zoomSlow3 {
          animation: zoomSlow3 18s ease-out forwards;
        }
      `}</style>

      {/* Custom Cursor */}
      {isHoveringImage && (
        <div 
          className="custom-cursor"
          style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
        >
          <span>DRAG</span>
        </div>
      )}

    {/* Hero Section - Multiple Women with Different Outfits */}
<div className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">

  {/* Cinematic Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

  {/* 🔥 RESPONSIVE IMAGE GRID */}
  <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
    
    {/* Woman 1 (VISIBLE ON MOBILE) */}
    <div className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&q=90"
        alt="Woman in evening gown"
        fill
        className="object-cover object-center scale-105 md:scale-110 animate-zoomSlow"
        priority
      />
      <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent" />
    </div>

    {/* Woman 2 (HIDDEN ON MOBILE) */}
    <div className="relative overflow-hidden hidden md:block">
      <Image
        src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1200&q=90"
        alt="Woman in power suit"
        fill
        className="object-cover object-center scale-110 animate-zoomSlow2"
        priority
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
    </div>

    {/* Woman 3 (HIDDEN ON MOBILE) */}
    <div className="relative overflow-hidden hidden md:block">
      <Image
        src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&q=90"
        alt="Woman in casual outfit"
        fill
        className="object-cover object-center scale-110 animate-zoomSlow3"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
    </div>
  </div>

  {/* CONTENT */}
  <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="font-['Playfair_Display'] text-white tracking-wide font-normal leading-[1.05] text-[34px] sm:text-[50px] md:text-8xl lg:text-9xl">

        {/* MOBILE */}
        <span className="block md:hidden">
          Women's Collection
        </span>

        {/* DESKTOP */}
        <span className="hidden md:block">
          Women's <br /> Collection
        </span>
      </h1>
    </motion.div>

    {/* LINE */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "60px" }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="h-px bg-white/40 mx-auto mt-5 sm:mt-6"
    />

    {/* TEXT */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-white/60 mt-4 sm:mt-6 font-['Cormorant_Garamond']
      text-[10px] sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] font-light"
    >
      TIMELESS ELEGANCE • MODERN SOPHISTICATION
    </motion.p>

    {/* BUTTON */}
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-6 sm:mt-10 px-6 sm:px-10 py-2.5 sm:py-3
      border border-white/40 text-white
      text-[10px] sm:text-xs tracking-[0.2em] uppercase
      hover:bg-white hover:text-black
      transition-all duration-500 font-['Cormorant_Garamond']"
    >
      Explore Collection
    </motion.button>

  </div>
</div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="space-y-40">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              {/* Section Header */}
              <div className="flex items-start justify-between border-b border-[#8B4513]/10 pb-8">
                <div className="flex-1">
                  <span className="text-xs tracking-[0.3em] text-[#8B4513]/60 font-['Cormorant_Garamond'] uppercase">
                    {section.category}
                  </span>
                  <h2 className="section-title mt-2">{section.title}</h2>
                  <div className="w-12 h-px bg-[#8B4513] mt-5 mb-6" />
                  <p className="section-description max-w-xl">
                    {section.description}
                  </p>
                </div>
                
                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => scrollTo(index, 'left')}
                    className="arrow-btn w-12 h-12 rounded-full border border-[#8B4513]/20 flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300"
                    style={{ cursor: 'pointer' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => scrollTo(index, 'right')}
                    className="arrow-btn w-12 h-12 rounded-full border border-[#8B4513]/20 flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300"
                    style={{ cursor: 'pointer' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Horizontal Scroll Carousel */}
              <div
                ref={el => scrollRefs.current[index] = el}
                className="scroll-container pb-6"
                onMouseDown={(e) => handleMouseDown(e, index)}
                onMouseMove={(e) => handleMouseMoveDrag(e, index)}
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => {
                  setIsHoveringImage(false);
                  if (!isDragging) {
                    setIsDragging(false);
                  }
                }}
                style={{ 
                  userSelect: 'none',
                  overflowX: 'auto',
                  overflowY: 'hidden'
                }}
              >
                <div className="flex gap-7" style={{ width: 'max-content' }}>
                  {section.items.map((img, i) => (
                    <div
                      key={i}
                      className="image-card group"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={img}
                          alt={section.names[i]}
                          width={400}
                          height={550}
                          className="w-full h-[440px] object-cover"
                          draggable={false}
                          priority={index === 0 && i < 3}
                        />
                        
                        {/* Clean Hover Overlay - Single Background */}
                        <div className="image-overlay">
                          <span className="product-name">{section.names[i]}</span>
                          <button 
                            className="view-btn"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => setIsHoveringImage(false)}
                            onMouseLeave={() => setIsHoveringImage(true)}
                          >
                            DISCOVER
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="relative py-28 mt-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80"
            alt="Featured Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[#D4A574] tracking-[0.3em] text-xs font-['Cormorant_Garamond'] uppercase">
              Limited Edition
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white font-normal tracking-wide mt-4 leading-tight">
              Couture Collection
            </h2>
            <div className="w-16 h-px bg-[#D4A574] mt-6 mb-6" />
            <p className="text-white/60 font-['Cormorant_Garamond'] text-lg max-w-md font-light">
              Experience personalized craftsmanship with our master couturiers. Each piece is meticulously crafted to your exact measurements.
            </p>
            <button 
              className="mt-8 px-10 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-['Cormorant_Garamond'] text-sm tracking-[0.2em] font-light"
              style={{ cursor: 'pointer' }}
            >
              INQUIRE NOW
            </button>
          </motion.div>
        </div>
      </div>

    </div>
  );
}