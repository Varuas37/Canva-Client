import React from 'react';

function TaskCard({ text }) {
	return (
		<div className="overflow-hidden rounded-lg mb-5 bg-white shadow">
			<div className="px-4 py-5 sm:p-6">{text}</div>
		</div>
	);
}

TaskCard.defaultProps = {
	text: 'Loading...',
};
export default TaskCard;
