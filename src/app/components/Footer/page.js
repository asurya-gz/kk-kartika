// components/Footer.js
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Klinik Kesehatan Keluarga"
                width={40}
                height={40}
                className="bg-white p-1 rounded-md"
              />
              <span className="ml-3 text-xl font-bold">Klinik Kartika</span>
            </div>
            <p className="text-gray-300 mb-4">
              Memberikan pelayanan kesehatan terbaik untuk keluarga Anda dengan
              penuh kepedulian dan profesionalisme.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/klinikkartika1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@klinik.kartika?_t=ZS-8uFlZYhO888&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.999 3.5c-.91-.68-1.999-1.086-3.139-1.147v9.87c-.003 2.088-1.707 3.779-3.793 3.777-1.076 0-2.053-.443-2.768-1.157-.715-.715-1.157-1.69-1.157-2.768s.442-2.052 1.157-2.767c.715-.715 1.69-1.157 2.767-1.157.325 0 .64.039.947.113v-2.023c-.31-.04-.622-.063-.937-.063-3.498 0-6.339 2.84-6.339 6.338 0 1.689.67 3.257 1.879 4.466s2.777 1.88 4.466 1.88c3.499 0 6.338-2.84 6.338-6.339v-5.557c.524.34 1.095.618 1.703.818s1.248.302 1.897.303v-2.667c-.68-.001-1.334-.202-1.9-.573-.564-.372-1.017-.88-1.327-1.466z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/klinikkartika_?igsh=MWE2a291eXZ4ZHJyZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              Layanan Kami
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/umum"
                  className="text-gray-300 hover:text-green-400 transition duration-300"
                >
                  Praktek Dokter Umum
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lab"
                  className="text-gray-300 hover:text-green-400 transition duration-300"
                >
                  Laboratorium
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gigi"
                  className="text-gray-300 hover:text-green-400 transition duration-300"
                >
                  Klinik Gigi
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kia"
                  className="text-gray-300 hover:text-green-400 transition duration-300"
                >
                  Klinik KIA
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vaksin"
                  className="text-gray-300 hover:text-green-400 transition duration-300"
                >
                  Vaksinasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Info Penting
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Profil Klinik
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Dokter Kami
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Artikel Kesehatan
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Hubungi Kami
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              Kontak & Jadwal
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300 group-hover:text-green-400 transition duration-300">
                  Jl. Raya Labuan - Pandeglang No.1, Talagasari, Kec. Saketi,
                  Kabupaten Pandeglang, Banten 42273
                </span>
              </li>

              <li className="flex items-start group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-gray-300 group-hover:text-pink-400 transition duration-300">
                  <div>Buka 24 Jam</div>
                </div>
              </li>

              <li className="flex items-start group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 4c-.553 0-1 .448-1 1v14c0 .553.447 1 1 1h20c.553 0 1-.447 1-1V5c0-.552-.447-1-1-1H2zm18 2v.511l-8 5.217-8-5.217V6l8 5 8-5zm-18 2.663l7.246 4.728L2 17.999V8.663zm18 0v9.336l-7.246-4.608L20 8.663z" />
                </svg>
                <a
                  href="mailto:klinikkartika.official@gmail.com"
                  className="text-gray-300 group-hover:text-green-400 transition duration-300"
                >
                  klinikkartika.official@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Klinik Kartika. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
