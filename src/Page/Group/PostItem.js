import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function PostItem({data}) {
	const [showMore, setShowMore] = useState(false);
	const [showComments,setShowComments]= useState(false);
	const handleMore = () => {
		setShowMore(!showMore);
	};
	return (
		<div className="bg-white overflow-hidden shadow rounded-lg">
			<div className="px-4 py-5 sm:p-6 flex flex-row justify-between">
				<div className="flex flex-row justify-start items-center space-x-2">
					<img
						className="inline-block h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<span className="flex flex-col ">
						<h1 className="text-sm ">Tim Cook</h1>
						<h1 className="text-xs text-gray-500">{Date.now()}</h1>
					</span>
				</div>
				<div class="relative inline-block text-left">
					<div>
						<button
							type="button"
							class="inline-flex justify-center w-full rounded-lg  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:px-2 hover:py-2 hover:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
							id="options-menu"
							aria-haspopup="true"
							aria-expanded="true"
							onClick={handleMore}
						>
						
							<svg
								class="-mr-1 ml-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
					{showMore ? (
						<div
							class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="options-menu"
						>
							<div class="py-1">
								<a
									href="#"
									class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									role="menuitem"
								>
									<svg
										class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										></path>
									</svg>
									Delete
								</a>
								<a
									href="#"
									class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									role="menuitem"
								>
									<svg
										class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
										></path>
									</svg>
									Save
								</a>
							</div>
							<div class="py-1">
								<a
									href="#"
									class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									role="menuitem"
								>
									<svg
										class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
										></path>
									</svg>
									Report
								</a>
							</div>
						</div>
					) : null}
				</div>
			</div>
			<div className="px-4 py-4 sm:px-4">
				<div className="col-span-12 sm:col-span-6">
					<p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
				</div>
				<div className="my-3 sm:yx-3 sm:my-2 sm:py-6 flex flex-row justify-between">
				<div className="flex flex-row sm:hover:bg-gray-200 px-2 py-2 w-full rounded-lg sm:px-2 sm:py-2 border-top cursor-pointer justify-center">
						<svg
							class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indego-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
							></path>
						</svg>
						<span className="sm:inline hidden">Like</span>
					</div>
					<div onClick={()=>setShowComments(!showComments)} className="flex flex-row sm:hover:bg-gray-200 px-2 py-2  w-full rounded-lg sm:px-2 sm:py-2 border-top cursor-pointer justify-center">
						<svg
							class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indego-500 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
							></path>
						</svg>
						<span className="sm:inline hidden">Comment</span>
					</div>
					<div className="flex flex-row sm:hover:bg-gray-200 px-2 py-2  w-full rounded-lg sm:px-2 sm:py-2 border-top cursor-pointer justify-center">
						<svg
							class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indego-500 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
							></path>
						</svg>
						<span className="sm:inline hidden">Save</span>
					</div>
				</div>
			</div>
			{showComments?<CommentItem/>:null}
			
		</div>
	);
}

PostItem.propTypes = {};

export default PostItem;
