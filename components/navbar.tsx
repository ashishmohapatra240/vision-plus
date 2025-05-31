"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-medium text-xl">
              <Image
                src="/images/logo.png"
                alt="Vision Plus"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white/80 hover:text-white transition"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition"
            >
              About
            </Link>
            <Button size="sm">Book a Meeting</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white/80 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white/80 hover:text-white transition"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white/80 hover:text-white transition"
              >
                About
              </Link>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full">
                  Book a Meeting
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
