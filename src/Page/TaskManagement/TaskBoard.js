import React, { useEffect } from "react";
import TaskManagement from "./TaskManagement";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBoard, getLists } from "../../Redux/Action/tasks";
const TaskBoard = ({ board, getBoard, task,getLists }) => {
  const { id } = useParams();
  useEffect(async () => {
    
   await getBoard(id);
  }, [id]);
 
  useEffect(async () => {
    await getLists(id);
  }, [id]);

  return (
    <div>
      <TaskManagement board={board} task ={task}/>
    </div>
  );
};

TaskBoard.propTypes = {
  getBoard: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  board: state.tasks.board,
  task: state.tasks,
  
});
export default connect(mapStateToProps, { getBoard, getLists })(TaskBoard);
