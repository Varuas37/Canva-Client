import React from 'react';
import Header from '../../Components/Header/Header';
import TaskCard from '../../Components/TaskList/TaskCard';
import TaskList from '../../Components/TaskList/TaskList';
import { connect } from 'react-redux';
// import TaskActionButton from '../../Components/TaskList/TaskActionButton';
function TaskManagement({ lists }) {
	return (
		<div>
			<div style={{ padding: '20px' }} className="mx-auto px-4 sm:px-6 md:px-8">
				<div className="" style={{ display: 'flex', flexDirection: 'column' }}>
					<Header data={'Task Management'}></Header>
				</div>

				<div class="bg-white mt-5 overflow-x-scroll rounded-lg">
					<div class="px-4 py-5 sm:p-6 flex flex-row">
						<div className="flex-1 sm:flex sm:flex-row">
							{lists.map((list) => (
								<TaskList id={list.id} title={list.title}>
									{list.cards.map((card) => (
										<TaskCard key={card.id} text={card.text} />
									))}
									{/* <TaskActionButton list={"Add list"}/> */}
								</TaskList>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => ({
	lists: state.tasks.tasks,
});
export default connect(mapStateToProps, null)(TaskManagement);
