import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAnnouncement,
  getCourse,
  getTodo,
} from "../../Redux/Action/courses";
import Header from "../../Components/Header/Header";
import Section from "../../Components/SectionHeading/Section";
import Info from "../../Components/Info/Info";
import ListWrapper from "../../Components/ListItem/ListWrapper";
import ListItem from "../../Components/ListItem/ListItem";
import Tabs from "../../Components/Tabs/Tabs";
import TabItem from "../../Components/Tabs/TabItem";
const Course = ({
  match,
  courses: { course, courseLoading, todo_loading, todo, announcement },
  getCourse,
  getTodo,
  getAnnouncement,
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

  return auth.isAuthenticated && !courseLoading &&!todo_loading ? (
    <Fragment>
      {/* <TabItem></TabItem> */}
    <div style={{ padding: "29px" }}>
       
      <Header data={course.name ? course.name : null}>
        <p class="mb-2 text-medium font-medium text-gray-600 dark:text-gray-400">
          {course.enrollments[0].type == "ta" ? "Teacher" : "Student"}
        </p>
      </Header>
      <Info
        data={todo}
        courseData={course}
        announcementData={announcement}
      ></Info>
      <h1 class="text-2xl font-bold leading-tight text-gray-900" style={{margin:"10px"}}>Todo</h1>
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
                
                               />
              ))
            ) : (
              <h2>Todos not found</h2>
            )}
      </ListWrapper>

      <h1 class="text-2xl font-bold leading-tight text-gray-900" style={{margin:"10px"}}>Announcement</h1>
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
                 />
              ))
            ) : (
              <h2><ListItem title="No Annoucements Available"></ListItem></h2>
            )}
      </ListWrapper>
      
 
    </div>
         
         </Fragment> 
  ) : (
    <Fragment>
      <Header data={"Data Loading..."}></Header>
    </Fragment>
  );
};

Course.propTypes = {
  auth: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  getCourse: PropTypes.func.isRequired,
  getTodo: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  courses: state.courses,
  todo: state.courses.todo,
});
export default connect(mapStateToProps, {
  getCourse,
  getTodo,
  getAnnouncement,
})(Course);
