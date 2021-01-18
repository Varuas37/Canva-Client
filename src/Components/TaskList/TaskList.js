import React from 'react';
import TaskActionButton from './TaskActionButton';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

function TaskList({ list, index }) {
	return (
		<Draggable draggableId={String(list.id)} index={index}>
			{(provided) => (
				<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					<div
						className="overflow-hidden sm:rounded-lg sm:w-17 m-2  bg-gray-50"
						style={{ height: 'fit-content', padding: '10px' }}
					>
						<Droppable droppableId={String(list.id)} type="card">
							{(provide) => (
								<div
									className="sm:rounded-lg"
									ref={provide.innerRef}
									{...provide.droppableProps}
									{...provide.dragHandleProps}
								>
									<div className="px-2 py-5 sm:px-6 sm:text-xl font-medium">{list.title}</div>
									<div
										className="overflow-y-scroll rounded"
										style={{
											maxHeight: '600px',
											maxWidth: '272px',
											minWidth: '272px',
											height: 'fit-content',
											padding: '10px',
										}}
									>
										{list.cards.map((card, index) => (
											<TaskCard key={card.id} text={card.text} id={card.id} index={index} />
										))}
										{provide.placeholder}
									</div>

									<TaskActionButton listID={list.id} />
								</div>
							)}
						</Droppable>
					</div>
				</div>
			)}
		</Draggable>
	);
}

export default TaskList;
