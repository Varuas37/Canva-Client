import React from 'react';
import Header from '../../Components/Header/Header';
import TaskList from '../../Components/TaskList/TaskList';
import { connect } from 'react-redux';
import TaskActionButton from '../../Components/TaskList/TaskActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sortCards } from '../../Redux/Action/tasks';
//Layout works well in this commit
function TaskManagement({ lists, sortCards }) {
	const handleDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}
		sortCards(source.droppableId, destination.droppableId, source.index, destination.index, draggableId);
		console.log(destination, source, draggableId);
	};
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<div>
				<div style={{ padding: '20px' }} className="mx-auto px-4 sm:px-6 md:px-8">
					<div className="" style={{ display: 'flex', flexDirection: 'column' }}>
						<Header data={'Task Management'}></Header>
					</div>

					<div class="bg-white mt-5 overflow-x-scroll rounded-lg">
						<div class="px-4 py-5 sm:p-6 flex flex-row">
							<div className="flex-1 sm:flex sm:flex-row">
								{lists && lists.map((list) => <TaskList key={list.id} list={list}></TaskList>)}
								<TaskActionButton list />
							</div>
						</div>
					</div>
				</div>
			</div>
		</DragDropContext>
	);
}
const mapStateToProps = (state) => ({
	lists: state.tasks.tasks,
});
export default connect(mapStateToProps, { sortCards })(TaskManagement);
