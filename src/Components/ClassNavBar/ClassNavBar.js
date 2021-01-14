import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink,useLocation } from 'react-router-dom';
function ClassNavBar({ id }) {
	const location = useLocation();
	if (location.pathname.match(/groups/)){
		return null;
	  }
	// const {id} = useParams();
	return (
		<Fragment>
			<aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
				<nav class="space-y-1">
					{/* <!-- Current: "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" --> */}
					<NavLink
						activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
						exact to={`/course/${id}`}
						className="group rounded-md px-3 py-2 flex items-center text-sm font-medium"
						aria-current="page"
					>
						{/* <!-- Current: "text-indigo-500 group-hover:text-indigo-500", Default: "text-gray-400 group-hover:text-gray-500" --> */}

						<svg
							className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span className="truncate"> Home </span>
					</NavLink>

					<NavLink
						activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
						to={`/course/${id}/announcement`}
						className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
					>
						{/* <!-- Heroicon name: key --> */}
						<svg
							className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
							></path>
						</svg>
						<span className="truncate"> Annoucements </span>
					</NavLink>

					<NavLink
						activeClassName="text-indigo-700  shadow-sm  hover:text-gray-700 hover:bg-white "
						to={`/course/${id}/assignment`}
						className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
					>
						{/* <!-- Heroicon name: credit-card --> */}
						<svg
							className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
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
						<span className="truncate"> Assignments </span>
					</NavLink>
					<NavLink
					
						activeClassName="text-indigo-700 shadow-sm hover:text-gray-700 hover:bg-white "
						push to={`/course/${id}/group`}
						className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
					>
						{/* <!-- Heroicon name: view-grid-add --> */}
						<svg
							className="group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							></path>
						</svg>
						<span className="truncate">Group</span>
					</NavLink>
				</nav>
			</aside>
		</Fragment>
	);
}

ClassNavBar.propTypes = {
	id: PropTypes.string.isRequired,
};

export default ClassNavBar;
