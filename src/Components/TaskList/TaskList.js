import React from 'react';
import TaskActionButton from './TaskActionButton';
// import TaskCard from './TaskCard';

function TaskList({ title, children }) {
	return (
		<div className="overflow-hidden sm:rounded-lg sm:w-17 m-2 bg-gray-50" style={{height:"fit-content", padding:"10px"}}>
			<div className="px-4 py-5 sm:p-3">
				<div
					// className="overflow-hidden sm:rounded-lg shadow rounded-lg divide-y bg-gray-200 divide-gray-200 my-5"
					className="sm:rounded-lg "
				>
					<div className="px-2 py-5 sm:px-6 sm:text-xl sm:font-medium">{title}</div>
					<div className="overflow-y-scroll px-4 py-5 sm:p-6 rounded" style={{maxHeight:"600px",maxWidth:"300px", minWidth:"272px", height:"fit-content" , padding:"10px"}}>
						{children}
					</div>
				</div>
               
                <TaskActionButton />
			</div>
		</div>
	);
}

export default TaskList;
