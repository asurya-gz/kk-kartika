import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative p-8 bg-white rounded-2xl transition-all duration-300">
      {/* Decorative Elements */}
      <div className="absolute top-6 right-8 opacity-10">
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="text-green-600 text-7xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={`${
                i < testimonial.rating ? "text-yellow-400" : "text-gray-200"
              } text-xl transition-colors duration-300`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          </div>
          <div className="border-l-2 border-gray-100 pl-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              {testimonial.name}
            </h4>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-gray-500 text-sm">Pasien Kami</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
