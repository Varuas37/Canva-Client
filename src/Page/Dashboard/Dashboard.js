import React, { Fragment, useEffect,useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar/Navbar";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import {
  getCourses,
  getFavCourses,
  getUserTodo,
} from "../../Redux/Action/courses";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CardWrapper from "../../Components/Cards/CardWrapper";
import SidebarWrapper from "../../Components/Sidebar/SidebarWrapper";
import SidebarItem from "../../Components/Sidebar/SidebarItem";

const Dashboard = ({
  auth,
  getCourses,
  getFavCourses,
  courses: { course_loading, favouriteCourse, todo },
  getUserTodo,
}) => {
  useEffect(() => {
    getUserTodo();
  }, []);
  useEffect(() => {
    getFavCourses();
  }, []);

  const [toggleSidebar,setToggleSidebar]  = useState(true);
  const handleToggle=()=>{
    console.log(toggleSidebar)
  setToggleSidebar(!toggleSidebar)

  }

  var d = new Date();
  return auth.isAuthenticated ? (
    <div style={{ padding: "20px" }}>
      <div
        style={{ display: "flex", flexDirection: "column",  }}
      >
        <Header data={auth.user.data.name}>
        {/* <span class="inline-flex rounded-md shadow-sm" style={{position:"absolute",right:"5%",top:"25%"} }>
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            onClick={()=>handleToggle()}
          >
            Toggle Tasksss
          </button>
        </span>  */}
        </Header>
      
       
      </div>

      <main
        class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="pt-2 pb-6 md:py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
          <div
            class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
            style={{ marginTop: "5%" }}
          >
            <CardWrapper>
              {favouriteCourse && favouriteCourse.length > 0 ? (
                favouriteCourse.map((course) =>
                  !course.access_restricted_by_date &&
                  course.created_at &&
                  course.type !== "StudentEnrollment" ? (
                    <Cards key={course.id} data={course}></Cards>
                  ) : null
                )
              ) : (
                <h2>No Courses Found</h2>
              )}
            </CardWrapper>
          </div>
        </div>
      </main>

    
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  getFavCourses: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  courses: state.courses,
  todos: state.courses.user_todo,
});
export default connect(mapStateToProps, { getFavCourses, getUserTodo })(
  Dashboard
);
