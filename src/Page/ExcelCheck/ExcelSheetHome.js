import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const ExcelSheetHome = () => {
  return (
    <div class="flex justify-center align-center w-full flex-col">
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <Link
          to="/checkPlagarism"
          class="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Check Assignments</div>
            <p class="text-gray-700 text-base">
              Please download your excel files from the submission to upload
              here.
            </p>
          </div>
        </Link>
        {/* <!--Card 2--> */}
        <Link
          to="/excelCheck"
          class="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Upload Assignments</div>
            <p class="text-gray-700 text-base">
              Please have your template file ready to upload assignments to
              canvas
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

// ExcelSheetHome.propTypes = {};

export default ExcelSheetHome;
