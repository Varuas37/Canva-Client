import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import imgDefault from "./default.png";
const Cards = ({ data }) => {
  return data ? (
    <Fragment>
      <Link to={`/course/${data.id}`}>
        <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={
                data.image_download_url ? data.image_download_url : imgDefault
              }
              alt=""
              style={{ objectFit: "fill" }}
            />
            <h3 className="mt-6 text-gray-900 text-sm leading-5 font-medium">
              {" "}
              {data.course_code ? data.course_code : null}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              {data.teachers.length == 1 ? (
                data.teachers.map((teacher) => (
                  <dd className="text-gray-500 text-sm leading-5">
                    {teacher.display_name}
                  </dd>
                ))
              ) : (
                <dd className="text-gray-500 text-sm leading-5">
                  Multiple Instructors
                </dd>
              )}

              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                  {data.enrollments[0].type == "student"
                    ? "Student"
                    : "Teacher"}
                </span>
              </dd>
            </dl>
          </div>
          <div className="border-t border-gray-200"></div>
        </li>
      </Link>
    </Fragment>
  ) : null;
};
export default Cards;
