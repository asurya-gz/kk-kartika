import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layanan() {
  const layananList = [
    {
      id: 1,
      title: "Pemeriksaan Umum",
      description:
        "Pemeriksaan kesehatan umum untuk semua usia dengan dokter umum berpengalaman.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      id: 2,
      title: "Kesehatan Ibu & Anak",
      description:
        "Layanan pemeriksaan dan konsultasi kesehatan khusus untuk ibu hamil dan anak.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
      id: 3,
      title: "Laboratorium",
      description:
        "Layanan pemeriksaan laboratorium dengan teknologi modern dan hasil yang cepat dan akurat.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      id: 4,
      title: "Konsultasi Gizi",
      description:
        "Konsultasi dengan ahli gizi untuk program diet sehat dan penanganan masalah gizi.",
      icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z",
    },
    {
      id: 5,
      title: "Imunisasi",
      description:
        "Program imunisasi lengkap untuk bayi dan anak sesuai jadwal yang direkomendasikan.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      id: 6,
      title: "Pemeriksaan Gigi",
      description:
        "Pemeriksaan, perawatan, dan konsultasi kesehatan gigi dan mulut.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>Layanan - Klinik Kartika</title>
        <meta
          name="description"
          content="Layanan kesehatan berkualitas yang disediakan oleh Klinik Kartika"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-green-500 py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <span className="text-white font-medium text-sm uppercase tracking-wider mb-2 block">
              Profesional & Terpercaya
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Layanan Kami
            </h1>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan kesehatan berkualitas dengan
              didukung tenaga medis yang profesional
            </p>
          </div>
        </div>
      </section>

      {/* Layanan List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layananList.map((layanan) => (
              <div
                key={layanan.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={layanan.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {layanan.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{layanan.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
              Keunggulan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              Mengapa Memilih Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Peralatan Modern
              </h3>
              <p className="text-gray-600">
                Dilengkapi dengan peralatan medis modern untuk diagnosis yang
                akurat
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Tim Profesional
              </h3>
              <p className="text-gray-600">
                Ditangani oleh dokter dan tenaga medis berpengalaman
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Layanan 24 Jam
              </h3>
              <p className="text-gray-600">
                Siap melayani kebutuhan kesehatan Anda setiap saat
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
