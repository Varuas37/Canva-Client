import React, { useState } from "react";
import {useParams} from "react-router-dom";
import TaskActionButton from "./TaskActionButton";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";
import OutsideAlerter from "../../hooks/OutsideAlerter";
import { archiveList } from "../../Redux/Action/tasks";


function TaskList({ list, index, boardID, archiveList }) {
  const [showOptions, setShowOptions] = useState(false);
  let {id}=useParams();
  return (
    <Draggable draggableId={String(list.id)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className="overflow-x z-10 sm:rounded-lg sm:w-17 m-2  bg-gray-50"
            style={{ height: "fit-content", padding: "10px" }}
          >
            <Droppable droppableId={String(list.id)} type="card">
              {(provide) => (
                <div
                  className="sm:rounded-lg"
                  ref={provide.innerRef}
                  {...provide.droppableProps}
                  {...provide.dragHandleProps}
                >
                  <div className="px-2 py-5 sm:px-6 sm:text-xl flex justify-between flex-row font-medium">
                    <div> {list.title}</div>
                    <div className="relative">
                      <svg
                        onClick={() => setShowOptions(!showOptions)}
                        class="w-5 h-5"
                        fill="none"
                        stroke="gray"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                      </svg>
                      
                      {/* Menu Options for List Cards */}
                      {showOptions ? (
                        <OutsideAlerter
                          func={() => setShowOptions(!showOptions)}
                        >
                          <div
                            className="absolute rounded-md w-60 shadow z-30"
                            onClick={() => setShowOptions(!showOptions)}
                          >
                            <div className="bg-white  -space-y-px">
                              <div className="relative hover:bg-gray-200 cursor-pointer border p-3 flex">
                                <div className="flex space-x-4 items-center justify-center text-sm font-medium">
                                  {" "}
                                  <svg
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="gray"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    ></path>
                                  </svg>
                                  Add Card{" "}
                                </div>
                              </div>
                              
                              <div className="relative hover:bg-gray-200 cursor-pointer border p-3 flex">
                                <div
                                  className="flex space-x-4 items-center justify-center text-sm font-medium"
                                  onClick={archiveList(id, list.id)}
                                >
                                
                                  <svg
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="gray"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                    ></path>
                                  </svg>
                                  Archive
                                </div>
                              </div>
                            </div>
                          </div>
                        </OutsideAlerter>
                      ) : null}
                    </div>
                  </div>
                  <div
                    className="overflow-y-scroll rounded"
                    style={{
                      maxHeight: "600px",
                      maxWidth: "272px",
                      minWidth: "272px",
                      height: "fit-content",
                      padding: "10px",
                    }}
                  >
                    {list.cards &&
                      list.cards.map((card, index) => (
                        <>
                          <TaskCard key={card._id} card={card} index={index} />
                        </>
                      ))}
                    {provide.placeholder}
                  </div>

                  <TaskActionButton listID={list.id} boardID={boardID} />
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
}
const mapStateToProps = (state) => ({
  lists: state.tasks.tasks,
});
export default connect(mapStateToProps, {archiveList})(TaskList);
