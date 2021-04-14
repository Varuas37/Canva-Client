import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import checkImage from "./check.jpg";
import uploadImage from "./uploadexcel.png";

const ExcelSheetHome = () => {
  const options = [
    {
      id: 0,
      link: "/checkPlagarism",
      title: "Check Assignments",
      description:
        "Please download your excel files from the submission to upload here",
      image: checkImage,
    },
    {
      id: 1,
      link: "/excelCheck",
      title: "Upload Assignments",
      description:
        "Please have your template file ready to upload assignments to canvas",
      image: uploadImage,
    },
  ];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-2 lg:grid-cols-2 xl:gap-x-2"
      >
        {options.map((option) => (
          <Link to={option.link} key={option.id} className="relative">
            <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
              <img
                src={option.image}
                alt=""
                className="group-hover:opacity-75 object-cover pointer-events-none"
              />
              <button type="button" className="absolute inset-0">
                <span className="sr-only">View details for {option.title}</span>
              </button>
            </div>
            <p className="mt-2 block text-xl font-bold text-gray-900 truncate pointer-events-none">
              {option.title}
            </p>
            <p className="block text-lg font-medium text-gray-500 pointer-events-none">
              {option.description}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

// ExcelSheetHome.propTypes = {};

export default ExcelSheetHome;
