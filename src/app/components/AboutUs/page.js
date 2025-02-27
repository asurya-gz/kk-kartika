"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  const values = [
    {
      title: "Profesionalisme",
      description: "Memberikan layanan kesehatan dengan standar tertinggi",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Kepedulian",
      description: "Mengutamakan kesejahteraan dan kenyamanan pasien",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Integritas",
      description: "Menjunjung tinggi kejujuran dan etika dalam pelayanan",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-500 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang Kami
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Membangun kepercayaan melalui pelayanan kesehatan berkualitas
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/tenaga.jpg"
                  alt="Klinik Pratama Kartika"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Klinik Pratama Kartika
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Klinik Pratama Kartika berkedudukan di Kampung Sodong Pintu, RT
                005, RW 003, Desa Sodong, Kecamatan Saketi, Kabupaten
                Pandeglang, Provinsi Banten. Klinik ini awalnya adalah PMB Eka
                Kartika Suryani, didirikan dengan tujuan memberikan pelayanan
                kesehatan bagi masyarakat sekitar.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Klinik Pratama Kartika berperan serta dalam pelayanan kesehatan
                masyarakat luas untuk menunjang program pemerintah. Memberikan
                pelayanan bagi masyarakat umum dan perusahaan-perusahaan di
                wilayahnya.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dibangun di atas tanah dengan luas 486 m² dengan no. induk
                berusaha (NIB): 3107230031682, pelayanan kesehatan kami
                berorientasi pada mutu dan kepuasan pasien.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision, Mission & Motto */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              Visi, Misi, & Motto
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Visi
                </h3>
                <p className="text-gray-600">
                  Pelayanan yang ramah dan professional, meningkatkan mutu
                  pelayanan, konsisten kepada pelayanan yang professional,
                  menjalin kemitraan dengan masyarakat sekitar, memberikan
                  pelayanan medis dasar yang berbasis hemat dan terjangkau.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Misi
                </h3>
                <p className="text-gray-600">
                  "Amanah, Profesional serta melayani dengan hati"
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Motto
                </h3>
                <p className="text-gray-600">
                  "Menjadikan Klinik Pratama Kartika sebagai pelayanan kesehatan
                  umum yang terkemuka di wilayah kabupaten Pandeglang dan mampu
                  bersaing di era globalisasi"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
