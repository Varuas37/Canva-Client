import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import CardDetail from "./CardDetail";

function TaskCard({ card, index }) {
  const toggleEdit = () => {
    setEditing(!editing);
  };
  const [openCardDetail, setOpenCardDetail] = useState(false);
  const [editing, setEditing] = useState(false);
  const toggleShowCardDetail = () => {
    setOpenCardDetail(!openCardDetail);
  };

  return (
    <div>
      {openCardDetail ? (
        <CardDetail
          data={card}
          setOpenCardDetail={setOpenCardDetail}
          openCardDetail={openCardDetail}
        ></CardDetail>
      ) : null}
      <Draggable draggableId={String(card._id)} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="flex flex-row overflow-hidden rounded-lg mb-3 bg-white shadow "
          >
            <div className="flex flex-row w-full justify-between items-center pr-4">
              {editing ? (
                <span className="flex flex-col justify-center items-start">
                  <input
                    className="outline-none px-4 py-5 sm:p-4"
                    onBlur={toggleEdit}
                    autoFocus
                    value={`${card.title}`}
                  ></input>
                  <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-400 m-2 rounded shadow  sm:p-2 mt-2 text-white p-2  bg-gray-50">
                    Save
                  </button>
                </span>
              ) : (
                <div
                  onClick={toggleShowCardDetail}
                  className="px-4 py-5 sm:p-6 cursor-pointer"
                >
                  {card.title}
                </div>
              )}
              <svg
                onClick={toggleEdit}
                onBlur={toggleEdit}
                className="w-5 h-5 opacity-0 hover:opacity-100 text-gray-700 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
}

TaskCard.defaultProps = {
  text: "Loading...",
};
export default TaskCard;
