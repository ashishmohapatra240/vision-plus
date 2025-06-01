"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Vision Plus"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link
                href="/industries"
                className="flex items-center text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Industries
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/solutions"
                className="flex items-center text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Solutions
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/products"
                className="flex items-center text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Products
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/company"
                className="flex items-center text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Company
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/investors"
                className="flex items-center text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Investors
              </Link>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors p-2"></button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/industries"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Industries
              </Link>
              <Link
                href="/solutions"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                href="/company"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Company
              </Link>
              <Link
                href="/investors"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                Investors
              </Link>
              <div className="px-3 py-2 flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
