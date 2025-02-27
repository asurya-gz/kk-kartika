import React from "react";
import Image from "next/image";

const DoctorProfileModal = ({ doctor, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mb-6 relative w-full h-72 overflow-hidden rounded-xl">
          <Image
            src={doctor.image}
            alt={doctor.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{doctor.name}</h3>
        <p className="text-pink-500 font-medium mb-6">{doctor.specialty}</p>
        <p className="text-gray-600">{doctor.description}</p>
      </div>
    </div>
  );
};

export default DoctorProfileModal;
