"use client";

export default function Doctor() {
  const doctors = [
    {
      id: 1,
      name: "dr. Agin Gunaco",
      specialty: "Dokter Umum",
      image: "/Agin.jpg",
      education: ["Not Set"],
      experience: ["Not Set"],
      schedule: "Not Set",
    },
    {
      id: 2,
      name: "dr. Hj. Herfika Mulyadini",
      specialty: "Dokter Umum",
      image: "/Herfika.jpg",
      education: ["Not Set"],
      experience: ["Not Set"],
      schedule: "Not Set",
    },
  ];

  const handleAppointment = (doctorName) => {
    const whatsappMessage = `Saya ingin membuat janji temu dengan dokter ${doctorName}`;
    const whatsappURL = `https://wa.me/6282249906957?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white">
      <div className="relative bg-green-500 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tim Dokter Kami
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Dipimpin oleh para profesional kesehatan yang berpengalaman
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-48 h-48 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{doctor.specialty}</p>

                  <div className="w-full space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Pendidikan:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {doctor.education.map((edu, index) => (
                          <li key={index}>{edu}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Pengalaman:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {doctor.experience.map((exp, index) => (
                          <li key={index}>{exp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Jadwal Praktik:
                      </h4>
                      <p className="text-gray-600">{doctor.schedule}</p>
                    </div>

                    <button
                      onClick={() => handleAppointment(doctor.name)}
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                    >
                      Buat Janji Temu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
