"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo Klinik Kartika"
              width={40}
              height={40}
            />
            <span className="ml-3 text-xl font-bold text-green-500">
              Klinik Kartika
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-500 font-medium"
            >
              Beranda
            </Link>
            <Link
              href="/components/AboutUs"
              className="text-gray-700 hover:text-pink-500 font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              href="/layanan"
              className="text-gray-700 hover:text-pink-500 font-medium"
            >
              Layanan
            </Link>
            <Link
              href="/components/Doctor"
              className="text-gray-700 hover:text-pink-500 font-medium"
            >
              Dokter
            </Link>
            <Link
              href="/components/Contact"
              className="text-gray-700 hover:text-pink-500 font-medium"
            >
              Kontak
            </Link>
          </nav>

          <Link
            href="https://wa.me/6282249906957?text=Hallo%20Klinik%20Kartika!"
            className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Buat Janji
          </Link>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
                xmlns="http://www.w3.org/2000/svg"
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

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-pink-500 font-medium py-2"
              >
                Beranda
              </Link>
              <Link
                href="/components/AboutUs"
                className="text-gray-700 hover:text-pink-500 font-medium py-2"
              >
                Tentang Kami
              </Link>
              <Link
                href="/layanan"
                className="text-gray-700 hover:text-pink-500 font-medium py-2"
              >
                Layanan
              </Link>
              <Link
                href="/components/Doctor"
                className="text-gray-700 hover:text-pink-500 font-medium py-2"
              >
                Dokter
              </Link>
              <Link
                href="/components/Contact"
                className="text-gray-700 hover:text-pink-500 font-medium py-2"
              >
                Kontak
              </Link>
              <Link
                href="https://wa.me/6282249906957?text=Hallo%20Klinik%20Kartika!"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 text-center"
              >
                Buat Janji
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
