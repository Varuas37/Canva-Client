import React from "react";
import { Draggable } from "react-beautiful-dnd";
function TaskCard({ card, index }) {

  return (
    <Draggable draggableId={String(card._id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="overflow-hidden rounded-lg mb-3 bg-white shadow cursor-pointer"
        >
          <div className="px-4 py-5 sm:p-6">{card.title}</div>
          {console.log(card)}
        </div>
      )}
    </Draggable>
  );
}

TaskCard.defaultProps = {
  text: "Loading...",
};
export default TaskCard;
