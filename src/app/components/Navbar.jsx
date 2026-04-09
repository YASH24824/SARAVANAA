"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Jewellery", href: "/jewellery" },
  { name: "Men", href: "/mens" },
  { name: "Women", href: "/womens" },
  { name: "Kids", href: "/kids" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pendingHref = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleNavigation = (e, href) => {
    e.preventDefault();
    if (pathname === href) return;

    pendingHref.current = href;
    router.push(href);
  };

  return (
    <>
      {/* ✅ GLOBAL FONT STYLE */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        * {
          cursor: default;
        }

        .font-heading {
          font-family: 'Playfair Display', serif;
        }

        .font-body {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">

            {/* 🔥 LOGO + TEXT */}
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/")}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo1.png"
                alt="Logo"
                width={40}
                height={40}
                className="md:w-[180px] md:h-[50px] object-contain"
                priority
              />

              {/* MOBILE TEXT */}
              <span className="block md:hidden text-lg text-black font-heading font-medium">
                SARAVANAA
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1.5 shadow-sm">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-heading font-medium px-4 py-2 text-sm lg:text-base rounded-full transition ${
                        isActive
                          ? "bg-black text-white"
                          : "text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SPACE */}
            <div className="hidden md:block w-[180px]" />

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black md:hidden p-2"
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 bg-white p-4 rounded-xl shadow"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-gray-700 font-body"
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <div className="h-[65px] md:h-[75px]" />
    </>
  );
};

export default Navbar;