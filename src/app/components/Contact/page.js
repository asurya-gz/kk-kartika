"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-500 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Kami siap melayani Anda dengan sepenuh hati
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Map Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Informasi Kontak
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">
                      Alamat
                    </h3>
                    <p className="text-gray-600">
                      Jl. Raya Labuan - Pandeglang No.1, Talagasari, Kec.
                      Saketi, Kabupaten Pandeglang, Banten 42273
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">
                      Telepon/WhatsApp
                    </h3>
                    <p className="text-gray-600">+62 822-4990-6957</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      klinikkartika.official@gmail.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-600">Buka 24 Jam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-4 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.944400879271!2d105.9640410745867!3d-6.4011656935894985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4230a901ef7d81%3A0x38c02e3400ac982!2sKLINIK%20KARTIKA!5e0!3m2!1sid!2sid!4v1740623180440!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
