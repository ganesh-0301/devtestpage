'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'India', href: '/blog?location=India' },
    { name: 'Nepal', href: '/blog?location=Nepal' },
    { name: 'Bhutan', href: '/blog?location=Bhutan' },
    { name: 'Dubai', href: '/blog?location=Dubai' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-primary-300 group-hover:text-primary-200 transition-colors">
                <Logo className="h-10 w-10" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent">
                Wanderlust
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-purple-100 hover:text-white hover:bg-purple-700/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-purple-100 hover:text-white hover:bg-purple-700/50 focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-800/95 backdrop-blur-sm border-t border-purple-700">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-purple-100 hover:text-white hover:bg-purple-700/50 block px-3 py-2 rounded-lg text-base font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

