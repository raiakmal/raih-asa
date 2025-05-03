"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Beasiswa', href: '/beasiswa' },
    { name: 'Berita', href: '/berita' },
    { name: 'Mitra', href: '/mitra' },
    { name: 'Tentang', href: '/tentang' },
    { name: 'Kontak', href: '/kontak' },
  ]

  return (
    <nav className="bg-[#f0f0ff] py-4 px-16 flex items-center justify-between shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
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
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-base font-medium ${
                link.name === 'Beranda' ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-10 w-full">
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="block py-2 text-base font-medium text-gray-800 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
