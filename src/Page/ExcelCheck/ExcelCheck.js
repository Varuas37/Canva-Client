import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import {
  assignExcelFile,
  downloadFile,
  uploadFile,
} from "../../Redux/Action/excel";
import { getFavCourses } from "../../Redux/Action/courses";
import { Link, useHistory } from "react-router-dom";

import lottie from "lottie-web";

function ExcelCheck({
  courses: { favCourseLoading, favouriteCourse },
  uploadFile,
  assignExcelFile,
  downloadFile,
  getFavCourses,
}) {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const lottieContainer = useRef();
  const btnSubmit = useRef();
  const [uploadedFile, setuploadedFile] = useState(null);
  const [clickedSubmit, setClickedSubmit] = useState(false);
  useEffect(() => {
    uploadedFile
      ? (btnSubmit.current.disabled = false)
      : (btnSubmit.current.disabled = true);
  }, [uploadedFile]);

  useEffect(() => {
    favouriteCourse.length > 0
      ? console.log("Already Fetched Courses")
      : getFavCourses();
  });
  const onFileUpload = (e) => {
    console.log(e.target.files[0]);
    setuploadedFile(e.target.files[0]);
  };
  const onSubmit = async (data) => {
    console.log(data);
    const { excelPassword, selectedCourse, assignmentID } = data;
    setClickedSubmit(true);
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./processing.json"),
    });
    const formData = new FormData();
    formData.append("fileName", uploadedFile);
    await uploadFile(formData);
    setTimeout(async () => {
      await downloadFile(uploadedFile.name);
    }, 2000);
    setTimeout(async () => {
      await assignExcelFile(
        uploadedFile.name,
        excelPassword,
        selectedCourse,
        assignmentID
      );
    }, 4000);
    setTimeout(() => {
      history.push("/");
    }, 6000);
  };
  return (
    <>
      {clickedSubmit ? (
        <div
          className=" container  mx-auto px-4 sm:px-6 lg:px-8 space-y-8 divide-y m-8"
          style={{ height: "25%", width: "25%" }}
        >
          {/* <h1>Posting Data</h1> */}
          {/* Animated by: <a href="https://lottiefiles.com/user/464686">Jiya Janani</a> */}
          // <div className="lottieContainer" ref={lottieContainer}></div>
        </div>
      ) : (
        <form
          // onChange={handleSubmit(onChange)}
          onSubmit={handleSubmit(onSubmit)}
          className="container bg-white p-5 rounded-2xl  mx-auto px-4 sm:px-6 lg:px-8
         space-y-8 divide-y divide-gray-200 m-8"
        >
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Upload
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Please upload the template file that you want to distribute to
                  students
                </p>
              </div>

              <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="fileName"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Template File
                  </label>
                  <div className="mt-2 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {uploadedFile ? (
                          <div className="flex justify-center items-center ">
                            {" "}
                            <svg
                              className={`w-12 h-12 ${
                                uploadedFile
                                  ? `text-green-600`
                                  : `text-gray-600`
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                            <p>{uploadedFile ? uploadedFile.name : null}</p>
                          </div>
                        ) : (
                          <svg
                            className="mx-auto h-16 w-16 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 30 30"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                          </svg>
                        )}
                        <div className="flex text-sm text-gray-600">
                          <label
                            for="fileName"
                            className="relative flex justify-center items-center cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <input
                              ref={register({ required: true })}
                              id="fileName"
                              name="fileName"
                              type="file"
                              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                              className="sr-only"
                              onChange={onFileUpload}
                            />
                            {uploadedFile ? (
                              <span>Choose a different file</span>
                            ) : (
                              <span>Upload a file</span>
                            )}
                          </label>
                        </div>

                        {uploadedFile ? null : (
                          <p className="text-xs text-gray-500">
                            .xlsx upto 1MB
                          </p>
                        )}
                      </div>
                      {errors.fileName && (
                        <span className=" text-xs text-red-500">
                          You need to upload a file to continue
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {uploadedFile ? (
              <div className="pt-8  space-y-6 sm:pt-10 sm:space-y-5">
                <div className=" ">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Assignment Information
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Please fill the following information
                  </p>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="selectedCourse"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Class Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <select
                        id="selectedCourse"
                        name="selectedCourse"
                        ref={register({ required: true })}
                        className="max-w-lg bg-gray-100 p-2 block outline-blue focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      >
                        {!favCourseLoading ? (
                          favouriteCourse.map(
                            (item) =>
                              item.enrollments[0].type !== "student" && (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              )
                          )
                        ) : (
                          <option>Loading.. </option>
                        )}
                      </select>
                    </div>
                    {errors.selectedCourse && (
                      <p className="sm:text-sm text-red-500">
                        Please select a class
                      </p>
                    )}
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="assignmentID"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      AssignmentID
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        ref={register({ required: true })}
                        name="assignmentID"
                        id="assignmentID"
                        className="block max-w-lg bg-gray-100 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {errors.assignmentID && (
                      <span className="sm:text-sm text-red-500">
                        Please type assignment ID
                      </span>
                    )}
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="excelPassword"
                      type="password"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Excel Password
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        ref={register({ required: true })}
                        type="text"
                        name="excelPassword"
                        id="excelPassword"
                        className="block max-w-lg bg-gray-100 p-2  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {errors.excelPassword && (
                      <span className="sm:text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <Link
                to="/tools"
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </Link>
              <button
                ref={btnSubmit}
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
ExcelCheck.propTypes = {
  auth: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  assignExcelFile: PropTypes.func.isRequired,
  downloadFile: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  courses: state.courses,
});

export default connect(mapStateToProps, {
  uploadFile,
  assignExcelFile,
  downloadFile,
  getFavCourses,
})(ExcelCheck);
