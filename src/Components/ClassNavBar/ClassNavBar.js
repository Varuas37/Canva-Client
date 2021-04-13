import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
function ClassNavBar({ id, courseData }) {
  const location = useLocation();
  if (location.pathname.match(/groups/)) {
    return null;
  }
  //   const { id } = useParams();
  return (
    <Fragment>
      <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav class="space-y-1">
          {/* <!-- Current: "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" --> */}
          <NavLink
            activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
            exact
            to={`/course/${id}`}
            className="group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            aria-current="page"
          >
            {/* <!-- Current: "text-indigo-500 group-hover:text-indigo-500", Default: "text-gray-400 group-hover:text-gray-500" --> */}

            <svg
              className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="truncate"> Home </span>
          </NavLink>

          <NavLink
            activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
            to={`/course/${id}/grades`}
            className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          >
            {/* <!-- Heroicon name: key --> */}
            <svg
              className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
            <span className="truncate"> Grades </span>
          </NavLink>

          <NavLink
            activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
            to={`/course/${id}/assignment`}
            className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          >
            {/* <!-- Heroicon name: credit-card --> */}
            <svg
              className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
            <span className="truncate"> Assignments </span>
          </NavLink>
          <NavLink
            activeClassName="text-indigo-700 shadow-sm hover:text-gray-700 hover:bg-white "
            push
            to={`/course/${id}/group`}
            className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          >
            {/* <!-- Heroicon name: view-grid-add --> */}
            <svg
              className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="truncate">Group</span>
          </NavLink>

          {!courseData.courseLoading &&
          courseData.course.enrollments[0].type !== "student" ? (
            <NavLink
              activeClassName="text-indigo-700 shadow-sm hover:text-gray-700 hover:bg-white "
              push
              to={`/course/${id}/reports`}
              className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <svg
                className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                ></path>
              </svg>

              <span className="truncate">Reported posts</span>
            </NavLink>
          ) : null}
        </nav>
      </aside>
    </Fragment>
  );
}

ClassNavBar.propTypes = {
  id: PropTypes.string.isRequired,
  courseData: PropTypes.object.isRequired,
};
const mapStatesToProps = (state) => ({
  courseData: state.courses,
});
export default connect(mapStatesToProps, null)(ClassNavBar);
