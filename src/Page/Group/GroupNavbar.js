import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function GroupNavbar({ id }) {
	// const {id} = useParams();
	return (
		<Fragment>
			<aside className="py-6 px-2 shadow h-screen	 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
				<nav className="space-y-1">
					{/* <!-- Current: "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" --> */}
					<NavLink
						activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
						to={`/groups/${id}`}
						className="group rounded-md px-3 py-2 flex items-center text-sm font-medium"
						aria-current="page"
					>
						{/* <!-- Current: "text-indigo-500 group-hover:text-indigo-500", Default: "text-gray-400 group-hover:text-gray-500" --> */}

						<svg
							className="text-indego-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							></path>
						</svg>
						<span className="truncate"> Home </span>
					</NavLink>

					<NavLink
					activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
						to={`/groups/${id}/resources`}
						className="group rounded-md px-3 py-2 flex items-center text-sm font-medium"
					>
						{/* <!-- Heroicon name: library --> */}
						<svg
							className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
							></path>
						</svg>
						<span className="truncate"> Resources </span>
					</NavLink>

					<NavLink
					activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
						to={`/groups/${id}/notes`}
						className="group rounded-md px-3 py-2 flex items-center text-sm font-medium"
					>
						{/* <!-- Heroicon name: credit-card --> */}
						<svg
							className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							></path>
						</svg>
						<span className="truncate"> Notes </span>
					</NavLink>
					<NavLink
					activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
						to={`/groups/${id}/study`}
						// className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
						className="group rounded-md px-3 py-2 flex items-center text-sm font-medium"
					>
						{/* <!-- Heroicon name: users --> */}

						<svg
							className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
							></path>
						</svg>
						<span className="truncate">Peer Study</span>
					</NavLink>
				</nav>
			</aside>
		</Fragment>
	);
}

GroupNavbar.propTypes = {};

export default GroupNavbar;
