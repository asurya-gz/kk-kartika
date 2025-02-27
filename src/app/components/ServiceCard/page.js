import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faFlask,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ service = {} }) => {
  // Map icon strings to FontAwesome icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case "stethoscope":
        return faStethoscope;
      case "flask":
        return faFlask;
      case "tooth":
        return faTooth;
      default:
        return faStethoscope;
    }
  };

  const { icon = "stethoscope", title = "", description = "" } = service;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
        <FontAwesomeIcon icon={getIcon(icon)} className="text-2xl" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
