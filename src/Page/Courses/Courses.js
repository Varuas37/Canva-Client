import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableRow from "../../Components/TableRow/TableRow";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCourses } from "../../Redux/Action/courses";
import {useStickyState} from "../../Components/StickyState/StickyState"
import Skeleton from 'react-loading-skeleton';
import CanvasConnectionError from "../../Components/CanvasError/CanvasConnectionError";

const Courses = ({
  auth,
  getCourses,
  courses: { courses_loading, courses },
  canvasAuth,
}) => {

  useEffect(() => {
    getCourses();
  }, []);




  const [filter,setFilter] = useStickyState("student","selectedCourse");
  
  

  var startTerm = new Date();
  var d = new Date();
  return auth.isAuthenticated ? (
    <Fragment>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 m-8">
      <div
        class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
        style={{ margin: "20px", display:"flex",flexDirection:"row", width:"100%", position:"relative"  }}
      >
        <h1>My Courses</h1>
        {courses && courses.length > 0 ? 
                  <div style={{ width:"fit-content", position:"absolute", right:"2%"}}>
                    <label
                      for="selectedCourse"
                      class="block text-sm leading-5 font-medium text-gray-700"
                    >                      
                    </label>
                    <select
                    onChange={ev => setFilter(ev.target.value)} 
                    
                      id="selectedCourse"
                      class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                    >
               
                      <option value ="student" selected  >Student</option>
                      <option value="ta" >Teaching Assistant</option>
                      
                    </select>
                  </div> : <Skeleton count={3}/> 
                  }
      </div>
{  courses ? <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
              
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Favourites
                    </th>
                    <th class="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                  {courses && courses.length > 0 ? (
                    courses.map((course) =>
                      !course.access_restricted_by_date &&
                      !course.concluded &&
                      course.term.name == "2021-SPRING" && course.enrollments[0].type==filter.toString() ? (
                        <TableRow key={course.id} data={course} />
                      ) : null
                    )
                  ) : (
                    <Skeleton count={2}/> 
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
     
      : <CanvasConnectionError/>}
      </div>
    </Fragment>

  ) : (
    <Redirect to="/"></Redirect>
  );
};

Courses.propTypes = {
  auth: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  getCourses: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  courses: state.courses,
  canvasAuth: state.canvasAuth
});

export default connect(mapStateToProps, { getCourses })(Courses);
