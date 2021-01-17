import React from 'react';

function TaskActionButton({ list }) {
	const buttonText = list ? 'Add another list' : 'Add another card';
	return (
		<div className="flex flex-row flex-1 mt-2 text-gray-500 p-2 hover:bg-indigo-400 hover:text-white hover:rounded-lg cursor-pointer rounded-lg">
			<svg
				class="w-6 h-6"
				fill="currentColor"
				stroke="currentColor"
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
			<p >{buttonText}</p>
		</div>
	);
}

export default TaskActionButton;
