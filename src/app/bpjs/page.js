"use client";
import Link from "next/link";

export default function BPJSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 sm:p-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
              Pindah Faskes BPJS ke Klinik Kartika
            </h1>
            <p className="text-green-100 text-center text-lg max-w-2xl mx-auto">
              Proses yang mudah, cepat, dan dapat dilakukan secara online
              melalui aplikasi Mobile JKN
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 ml-3">
                  Cara Pindah Faskes
                </h2>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Klinik Kartika telah menjadi salah satu fasilitas kesehatan
                tingkat pertama (FKTP) yang bekerja sama dengan{" "}
                <span className="font-semibold text-green-600">
                  BPJS Kesehatan
                </span>
                . Anda dapat melakukan perpindahan faskes dari tempat sebelumnya
                ke Klinik Kartika melalui aplikasi{" "}
                <span className="font-semibold text-green-600">Mobile JKN</span>{" "}
                secara online, tanpa perlu datang langsung.
              </p>

              <div className="space-y-4">
                {[
                  "Unduh dan buka aplikasi Mobile JKN",
                  "Login menggunakan NIK dan password akun BPJS Anda",
                  'Pilih menu "Ubah Data Peserta"',
                  "Pilih provinsi: Banten",
                  "Pilih kabupaten/kota: Kabupaten Pandeglang",
                  "Pada daftar faskes yang muncul, cari dan pilih: KLINIK KARTIKA",
                  "Ikuti proses konfirmasi hingga selesai",
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-3">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-green-800">
                  <strong>Info Penting:</strong> Perpindahan akan aktif pada
                  tanggal 1 bulan berikutnya setelah proses selesai.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact and Notes */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 ml-3">
                  Butuh Bantuan?
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Kami siap membantu Anda dalam proses perpindahan faskes. Tim
                admin Klinik Kartika akan mendampingi setiap langkah.
              </p>
              <Link
                href="https://wa.me/6282249906957?text=Halo%20saya%20ingin%20dibantu%20pindah%20Faskes%20BPJS%20ke%20Klinik%20Kartika"
                className="w-full block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hubungi via WhatsApp
                </span>
              </Link>
            </div>

            {/* Important Note Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 ml-3">
                  Syarat Penting
                </h3>
              </div>
              <p className="text-gray-600">
                Perpindahan faskes hanya dapat dilakukan setelah{" "}
                <span className="font-semibold">3 bulan</span> terdaftar di
                faskes sebelumnya, kecuali untuk kondisi darurat tertentu.
              </p>
            </div>

            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Informasi Cepat
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Proses online via Mobile JKN
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Tidak perlu datang langsung
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Layanan bantuan tersedia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
