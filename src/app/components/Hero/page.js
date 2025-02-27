"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-500 text-white overflow-hidden">
      {/* Background Pattern - subtle geometric pattern instead of polkadot */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ pointerEvents: "none" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="pattern-hex"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="scale(2) rotate(0)"
            >
              <path
                d="M20 1.732L37.32 11.866V32.134L20 42.268L2.68 32.134V11.866L20 1.732Z"
                fill="none"
                stroke="white"
                strokeOpacity="0.5"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-hex)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Kami Peduli dengan
              <br />
              Kesehatan Anda
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-lg mx-auto md:mx-0">
              Klinik Kartika menawarkan layanan kesehatan modern dengan kualitas
              terbaik, didukung oleh dokter berpengalaman dan fasilitas medis
              terkini.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="https://wa.me/6282249906957?text=Hallo%20Klinik%20Kartika!,%20saya%20ingin%20membuat%20janji%20temu!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white hover:bg-red-700 font-medium py-3 px-6 rounded-md transition duration-300 shadow-md text-center"
                style={{
                  pointerEvents: "auto",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                Buat Janji Temu
              </a>

              <Link
                href="/layanan"
                className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-pink-500 hover:text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md"
              >
                Layanan Kami
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto md:mx-0">
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-md">
                <div className="text-2xl sm:text-3xl font-bold">2+</div>
                <div className="text-xs sm:text-sm opacity-90">
                  Tahun Pengalaman
                </div>
              </div>
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-md">
                <div className="text-2xl sm:text-3xl font-bold">4</div>
                <div className="text-xs sm:text-sm opacity-90">Dokter</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-md">
                <div className="text-2xl sm:text-3xl font-bold">5000+</div>
                <div className="text-xs sm:text-sm opacity-90">Pasien Puas</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] w-full">
              {/* Subtle frosted glass effect border */}
              <div className="absolute -inset-1 bg-white bg-opacity-20 rounded-xl blur-md"></div>
              {/* Pink accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-transparent opacity-20 rounded-xl"></div>
              {/* Use responsive sizing with aspect ratio instead of absolute positioning */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/alkes.jpg"
                  alt="Dokter profesional Klinik Kartika"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
