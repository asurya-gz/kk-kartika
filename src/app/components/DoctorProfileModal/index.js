import React from "react";

const DoctorProfileModal = ({ doctor, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                  {doctor.name}
                </h3>
                <div className="mt-2">
                  <p className="text-lg text-gray-600 mb-2">
                    Spesialisasi: {doctor.specialty}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Pendidikan:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {doctor.education?.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Pengalaman:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {doctor.experience?.map((exp, index) => (
                        <li key={index}>{exp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Jadwal Praktik:
                    </h4>
                    <p className="text-gray-600">{doctor.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={() => {
                const whatsappMessage = `Hallo Klinik Kartika!. Saya ingin membuat janji dengan dokter ${doctor.name}`;
                const whatsappURL = `https://wa.me/6282249906957?text=${encodeURIComponent(
                  whatsappMessage
                )}`;
                window.open(whatsappURL, "_blank");
              }}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Buat Janji
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileModal;
