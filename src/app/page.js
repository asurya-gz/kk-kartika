"use client";
import { useState } from "react";
import Hero from "./components/Hero/page";
import ServiceCard from "./components/ServiceCard/page";
import DoctorCard from "./components/DoctorCard/page";
import TestimonialCard from "./components/TestimonialCard/page";
import DoctorProfileModal from "./components/DoctorProfileModal";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Konsultasi Umum",
      description:
        "Konsultasi dengan dokter umum untuk berbagai keluhan kesehatan.",
      icon: "stethoscope",
    },
    {
      id: 2,
      title: "Pemeriksaan Laboratorium",
      description:
        "Layanan pemeriksaan darah dan urine dengan hasil cepat dan akurat.",
      icon: "flask",
    },
    {
      id: 3,
      title: "Perawatan Gigi",
      description:
        "Layanan kesehatan gigi dari pemeriksaan rutin hingga perawatan khusus.",
      icon: "tooth",
    },
  ];

  const doctors = [
    {
      id: 1,
      name: "dr. Agin Gunado",
      specialty: "Dokter Umum",
      image: "/Agin.jpg",
    },
    {
      id: 2,
      name: "dr. Hj. Herfika Mulyadini",
      specialty: "Dokter Umum",
      image: "/Herfika.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ny. Yayah",
      content:
        "Pelayanan di klinik sangat profesional dan ramah. Dokter memberikan penjelasan yang detail tentang kondisi kesehatan saya.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ny. Imas",
      content:
        "Fasilitas klinik modern dan bersih. Proses pendaftaran sangat mudah dan tidak perlu menunggu lama.",
      rating: 5,
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <>
      <Hero />

      {/* Layanan */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
              Layanan Profesional
            </span>
            <br></br>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800 relative inline-block">
              Layanan Kami
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
              Kami menyediakan berbagai layanan kesehatan berkualitas dengan
              didukung tenaga medis yang profesional dan peralatan modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-5 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    {/* Dynamic icon based on service.icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {service.icon === "stethoscope" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      )}
                      {service.icon === "flask" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      )}
                      {service.icon === "tooth" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/layanan"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg inline-flex items-center"
            >
              <span>Lihat Semua Layanan</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Dokter */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
              Tim Profesional
            </span>{" "}
            <br></br>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800 relative inline-block">
              Tim Dokter Kami
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
              Kami memiliki tim dokter berpengalaman dan profesional yang siap
              memberikan pelayanan kesehatan terbaik untuk Anda dan keluarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <DoctorCard doctor={doctor} onDoctorClick={handleDoctorClick} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/components/Doctor"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg inline-flex items-center"
            >
              <span>Lihat Semua Dokter</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {selectedDoctor && (
        <DoctorProfileModal doctor={selectedDoctor} onClose={closeModal} />
      )}

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
              Testimoni
            </span>{" "}
            <br></br>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800 relative inline-block">
              Apa Kata Mereka?
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
              Dengarkan pengalaman langsung dari pasien kami yang telah
              merasakan pelayanan kesehatan berkualitas dari tim kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Butuh Konsultasi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami atau membuat janji temu dengan
            dokter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/6282249906957?text=Hallo%20Klinik%20Kartika!,%20saya%20ingin%20membuat%20janji%20temu!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md"
            >
              Buat Janji Temu
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
