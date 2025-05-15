"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Beasiswa", href: "/beasiswa" },
    { name: "Berita", href: "#berita" },
    { name: "Mitra", href: "#mitra" },
    { name: "Tentang", href: "#tentang" },
    { name: "Kontak", href: "mailto:info@raihasa.com" },
  ];

  const handleClick = (e, link) => {
    if (link.name === "Beasiswa") {
      if (currentPath !== "/") {
        window.location.href = "/";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setIsMenuOpen(false);
      return;
    }

    e.preventDefault();

    const targetHref = link.href;

    if (currentPath !== "/") {
      window.location.href = "/" + targetHref;
    } else {
      const el = document.querySelector(targetHref);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#f0f0ff] py-4 px-4 md:px-16 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-40">
            <Image
              src="/logo.png"
              alt="RaihAsa Logo"
              width={160}
              height={48}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={
                link.name === "Kontak" ? undefined : (e) => handleClick(e, link)
              }
              className="text-base font-medium transition-colors text-gray-800 hover:text-purple-600"
              target={link.name === "Kontak" ? "_blank" : undefined}
              rel={link.name === "Kontak" ? "noopener noreferrer" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-10 w-full">
          <div className="container mx-auto px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={
                  link.name === "Kontak"
                    ? undefined
                    : (e) => handleClick(e, link)
                }
                className={`block py-2 text-base font-medium transition-colors ${
                  currentPath === "/beasiswa" && link.name === "Beasiswa"
                    ? "text-purple-600"
                    : "text-gray-800 hover:text-purple-600"
                }`}
                target={link.name === "Kontak" ? "_blank" : undefined}
                rel={link.name === "Kontak" ? "noopener noreferrer" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
