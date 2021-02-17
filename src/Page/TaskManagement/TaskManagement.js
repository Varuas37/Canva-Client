import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import TaskList from "../../Components/TaskList/TaskList";
import { connect } from "react-redux";
import TaskActionButton from "../../Components/TaskList/TaskActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  deleteBoard,
  sortCards,
  importTodos,
  getLists,
} from "../../Redux/Action/tasks";
import { useParams, useHistory } from "react-router-dom";
import DeleteModal from "../../Components/Modal/DeleteModal";

//Layout works well in this commit
function TaskManagement({
  lists,
  sortCards,
  board,
  deleteBoard,
  importTodos,
  getLists,
}) {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [importedTodo, setImportedTodo] = useState(false);
  let history = useHistory();
  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    sortCards(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      board._id,
      type
    );
  };
  const handleDelete = () => {
    deleteBoard(board._id);
    history.push("/boards");
  };
  const funcshowModal = () => {
    setShowModal(true);
  };
  const funcDismissModal = () => {
    setShowModal(false);
  };
  const handleImportTodo = async () => {
    await importTodos(id);
    await getLists(id);
    setImportedTodo(true);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ padding: "20px" }} className="mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="w-full"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Header data={board && board.title}>
            <span className="flex flex-row justify-center items-center ">
              <span
                onClick={funcshowModal}
                href="#"
                className="cursor-pointer rounded group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <svg
                  className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
                Delete
              </span>
              <button
                disabled={importedTodo}
                onClick={handleImportTodo}
                className={`text-sm  p-2 rounded hover:bg-gray-200 ${
                  importTodos ? "cursor-disabled" : "cursor-pointer"
                }`}
              >
                Import Todos{" "}
              </button>
            </span>
          </Header>
        </div>
        {showModal ? (
          <DeleteModal
            title={"Delete Board"}
            message={
              "Are you sure you want to delete the board. This action is irreversible"
            }
            deleteAction={handleDelete}
            deleteText="Delete Board"
            dismissModal={funcDismissModal}
          />
        ) : null}
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-white h-screen mt-5 overflow-x-scroll rounded-lg  "
            >
              <div className="px-4 py-5 sm:p-6 flex  flex-row ">
                <div className="flex-1 flex flex-row">
                  {lists &&
                    lists.map((list, index) => (
                      <TaskList
                        key={list.id}
                        list={list}
                        index={index}
                        boardID={id}
                      ></TaskList>
                    ))}
                  {provided.placeholder}
                  <TaskActionButton list boardID={id} />
                </div>
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

TaskManagement.defaultProps = {
  title: "Loading..",
};
const mapStateToProps = (state) => ({
  lists: state.tasks.tasks,
});
export default connect(mapStateToProps, {
  sortCards,
  deleteBoard,
  getLists,
  importTodos,
})(TaskManagement);
