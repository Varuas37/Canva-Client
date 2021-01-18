import React from 'react';
import Header from '../../Components/Header/Header';
import TaskList from '../../Components/TaskList/TaskList';
import { connect } from 'react-redux';
import TaskActionButton from '../../Components/TaskList/TaskActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sortCards } from '../../Redux/Action/tasks';
//Layout works well in this commit
function TaskManagement({ lists, sortCards }) {
	const handleDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;
		if (!destination) {
			return;
		}
		sortCards(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type);
	};
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<div style={{ padding: '20px' }} className="mx-auto px-4 sm:px-6 md:px-8">
				<div className="" style={{ display: 'flex', flexDirection: 'column' }}>
					<Header data={'Task Management'}></Header>
				</div>
				<Droppable droppableId="all-lists" direction="horizontal" type="list">
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							class="bg-white h-screen mt-5 overflow-x-scroll rounded-lg  "
						>
							<div class="px-4 py-5 sm:p-6 flex  flex-row ">
								<div className="flex-1 flex flex-row">
									{lists &&
										lists.map((list, index) => (
											<TaskList key={list.id} list={list} index={index}></TaskList>
										))}
									{provided.placeholder}
									<TaskActionButton list />
								</div>
							</div>
						</div>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}
const mapStateToProps = (state) => ({
	lists: state.tasks.tasks,
});
export default connect(mapStateToProps, { sortCards })(TaskManagement);
