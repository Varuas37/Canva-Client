import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
function TaskCard({ text, id, index }) {
	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className="overflow-hidden rounded-lg mb-3 bg-white shadow cursor-pointer"
				>
					<div className="px-4 py-5 sm:p-6">{text}</div>
				</div>
			)}
		</Draggable>
	);
}

TaskCard.defaultProps = {
	text: 'Loading...',
};
export default TaskCard;
