import React from "react";
import Image from "next/image";

const DoctorCard = ({ doctor, onDoctorClick }) => {
  return (
    <div className="p-6">
      <div className="mb-6 relative w-full h-72 overflow-hidden rounded-xl">
        <Image
          src={doctor.image}
          alt={doctor.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-500 transition-colors duration-300">
        {doctor.name}
      </h3>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          onClick={() => onDoctorClick(doctor)}
        >
          Lihat Profil
        </button>
        <button
          className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 py-2 px-6 rounded-full transition duration-300"
          onClick={() => {
            const whatsappMessage = `Hallo Klinik Kartika!. Saya ingin membuat janji dengan dokter ${doctor.name}`;
            const whatsappURL = `https://wa.me/6282249906957?text=${encodeURIComponent(
              whatsappMessage
            )}`;
            window.open(whatsappURL, "_blank");
          }}
        >
          Buat Janji
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
