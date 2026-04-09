"use client";
import Link from "next/link";

const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#faf8f5] border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-16">

        {/* ✅ TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <h2 className={`text-2xl text-black ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-4`}>
              SARAVANAA
            </h2>
            <p className={`text-gray-600 text-sm leading-relaxed ${FONT_STYLE.body}`}>
              We bring you affordable fashion and trusted gold jewellery
              designed for everyday elegance and festive occasions.
            </p>
          </div>

          {/* ✅ MOBILE: wrapper | DESKTOP: normal column */}
          <div className="md:contents">
            
         {/* QUICK LINKS + CATEGORIES */}
<div className="col-span-1 md:col-span-2">
  
  {/* ✅ Mobile → 2 columns | Desktop → normal */}
  <div className="grid grid-cols-2 gap-6 md:grid-cols-2">

    {/* QUICK LINKS */}
    <div className="text-center md:text-left">
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
        Quick Links
      </h3>

      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/#about" className="text-gray-700 hover:text-black transition">
            About
          </Link>
        </li>

        <li>
          <Link href="/contact" className="text-gray-700 hover:text-black transition">
            Contact
          </Link>
        </li>
      </ul>
    </div>

    {/* CATEGORIES */}
    <div className="text-center md:text-left">
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
        Categories
      </h3>

      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/mens" className="text-gray-700 hover:text-black transition">
            Men
          </Link>
        </li>

        <li>
          <Link href="/womens" className="text-gray-700 hover:text-black transition">
            Women
          </Link>
        </li>

        <li>
          <Link href="/kids" className="text-gray-700 hover:text-black transition">
            Kids
          </Link>
        </li>

        <li>
          <Link href="/jewellery" className="text-gray-700 hover:text-black transition">
            Jewellery
          </Link>
        </li>
      </ul>
    </div>

  </div>

</div>

          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>USILAMPATTI, Madurai, Tamil Nadu, Pincode-625532</li>
              <li>+91 9443052199</li>
              <li>kandanmonica@gmail.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 mt-3"></div>

      <div className="flex justify-center items-center text-sm text-gray-500 py-2">
        <p className="m-0">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;