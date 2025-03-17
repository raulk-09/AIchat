'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import headerLogo from '@/app/favicon.ico';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={headerLogo}
                alt="Register Karo"
                width={42}
                height={42}
              />
              <div className="text-[#1B3654] text-2xl font-bold">Register<span className="text-[#FF8A00]">Karo</span></div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#1B3654] hover:text-[#FF8A00] px-3 py-2 text-base font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-[#1B3654] hover:text-[#FF8A00] px-3 py-2 text-base font-medium transition-colors inline-flex items-center">
                Startup
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/blog" className="text-[#1B3654] hover:text-[#FF8A00] px-3 py-2 text-base font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact-us" className="text-[#1B3654] hover:text-[#FF8A00] px-3 py-2 text-base font-medium transition-colors">
              Contact Us
            </Link>
            <Link href="/about-us" className="text-[#1B3654] hover:text-[#FF8A00] px-3 py-2 text-base font-medium transition-colors">
              About Us
            </Link>
          </nav>

          {/* Phone Number Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+918447746183"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-[#FF8A00] hover:bg-[#e67c00] transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              +918447746183
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;