import React, { useState ,useRef} from "react";
import { useParams } from "react-router-dom";
import TaskActionButton from "./TaskActionButton";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";
import OutsideAlerter from "../../hooks/OutsideAlerter";
import { archiveList } from "../../Redux/Action/tasks";

function TaskList({ list, index, boardID, archiveList }) {
  const refBtnAddCard = useRef();
  
  const [showOptions, setShowOptions] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(list.title);
  let { id } = useParams();

  const handleEdit = (e) => {
    setTitleValue(e.target.value);
  };
  const handleAddCard = () => {
    refBtnAddCard.current.click();
    console.log("Handled");
  };
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
                    {editTitle ? (
                      <input
                      autoFocus={true}
                        value={titleValue}
                        onBlur={() => setEditTitle(!editTitle)}
                        onChange={(e) => handleEdit(e)}
                      />
                    ) : (
                      <div>
                        {" "}
                        {console.log(list.id)} {titleValue}
                      </div>
                    )}

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
                                <div
                                  className="flex space-x-4 items-center justify-center text-sm font-medium"
                                  onClick={() => setEditTitle(!editTitle)}
                                >
                                  {" "}
                                  <svg
                                    class="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                  </svg>
                                  Edit Title{" "}
                                </div>
                              </div>
                              <div
                                className="relative hover:bg-gray-200 cursor-pointer border p-3 flex"
                                onClick={handleAddCard}
                              >
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
                                  onClick={() => archiveList(id,list.id)}
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

                  <TaskActionButton listID={list.id} boardID={boardID} refBtnAddCard={refBtnAddCard} />
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
export default connect(mapStateToProps, { archiveList })(TaskList);
