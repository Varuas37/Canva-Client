import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAnnouncement,
  getCourse,
  getTodo,
  
} from "../../Redux/Action/courses";
import {getSubmissions} from "../../Redux/Action/submissions"
import Header from "../../Components/Header/Header";
import Info from "../../Components/Info/Info";
import ListWrapper from "../../Components/ListItem/ListWrapper";
import ListItem from "../../Components/ListItem/ListItem";
import imgNoTasks from "./NoTasks.png"
import imgNoAnnoucemnts from "./Announcement.png"
import Skeleton from 'react-loading-skeleton';


const Course = ({
  match,
  courses: { course, courseLoading, todo_loading, todo, announcement },

  getCourse,
  getTodo,
  getAnnouncement,
  getSubmissions,
  submission:{submission_loading,submissions},
  auth,
}) => {
  useEffect(() => {
    getCourse(match.params.id);
  }, [match.params.id]);

  useEffect(() => {
    getTodo(match.params.id);
  }, [match.params.id]);
  useEffect(() => {
    getAnnouncement(match.params.id);
  }, [match.params.id]);
  useEffect(() => {
    getSubmissions(match.params.id);
  }, [match.params.id]);
  return auth.isAuthenticated && !courseLoading &&!todo_loading &&!submission_loading ? (
    <Fragment>
      {/* <TabItem></TabItem> */}
    <div style={{ padding: "29px" }}>
       
      <Header data={course.name ? course.name : <Skeleton/>}>
        <p className="mb-2 text-medium font-medium text-gray-600 dark:text-gray-400">
          {course.enrollments[0].type == "ta" ? "Teacher" : "Student" || <Skeleton/>}
        </p>
      </Header>
      <Info
        data={todo}
        courseData={course}
        announcementData={announcement}
        submissionData= {submissions}
      ></Info>
      {console.log(submissions)}
      <h1 className="text-2xl font-bold leading-tight text-gray-900" style={{margin:"10px"}}>Todo</h1>
      <ListWrapper>
      
      {todo && todo.length > 0 ? (
              todo.map((item) => (
                <ListItem
                key={item.assignment.id}
                title={item.assignment.name}  
                subtitle={item.assignment.points_possible}
                subtitleText={`Total Points: ${" "}`}
                calendar={item.assignment.due_at}
                html_url={item.assignment.html_url}
                type = {item.type}
                needsgrading = {item.needs_grading_count}
                message={item.assignment.description}
                
                               />
              ))
            ) : (
              <Fragment>
                <div className="block focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <img src={imgNoTasks} height="250px" width="250px" ></img>
                  <p className="mt-2 max-w-xl text-sm text-gray-500">Relax, you completed all the tasks</p>
                </div>
                
                  
              </Fragment>
            )}
      </ListWrapper>

      <h1 className="text-2xl font-bold leading-tight text-gray-900" style={{margin:"10px"}}>Announcement</h1>
      <ListWrapper>
      
      {announcement && announcement.length > 0 ? (
              announcement.map((item) => (
                <ListItem
                  key={item.id}
                 title={item.title}  
                 subtitle={""}
                 subtitleText={``}
                 calender={item.posted_at}
                 html_url={item.html_url}
                 message={item.message}
                 />
              ))
            ) : (
              <Fragment>
                <div className="block focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <img src={imgNoAnnoucemnts} height="250px" width="250px" ></img>
                  <p className="mt-2 max-w-xl text-sm text-gray-500">No Recent Annoucements Found</p>
                </div>
                
                  
              </Fragment>
            )}
      </ListWrapper>
      
 
    </div>
         
         </Fragment> 
  ) : (
    <Fragment>
     <Skeleton/>
    </Fragment>
  );
};

Course.propTypes = {
  auth: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  getCourse: PropTypes.func.isRequired,
  getTodo: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  courses: state.courses,
  todo: state.courses.todo,
  submission: state.submissions,
  
});
export default connect(mapStateToProps, {
  getCourse,
  getTodo,
  getAnnouncement,
  getSubmissions,
})(Course);
