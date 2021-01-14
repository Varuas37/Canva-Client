import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { joinGroup } from '../../../Redux/Action/group';
import imgDefault from "../default.png"
function CourseGroup({ courses: { course }, joinGroup }) {


	const handleVisit = async() => {
		await joinGroup(course.course_code, course.id, course.enrollments[0].type);
		
		window.location = `/groups/${course.id}`
	};
	return (
		<div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
			<article>
				{/* <!-- Profile header --> */}
				<div>
					<div className="h-32 w-full lg:h-48">
						{/* bg-gradient-to-br from-yellow-800 rounded m-2 to-green-500  */}
						<img
							className="h-32 w-full object-cover lg:h-48"
							src={'https://source.unsplash.com/random;w=1950&amp;q=80'}
							alt=""
						/>
					</div>
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
							<div className="flex">
								<img
									className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
									src={
										course.image_download_url ? course.image_download_url : imgDefault
									  }
									alt=""
								/>
							</div>
							<div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
								<div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
									<h1 className="text-2xl font-bold text-gray-900 truncate">{course.name}</h1>
								</div>

								<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
									<button
										onClick={handleVisit}
										type="button"
										className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
									>
										{/* <!-- Heroicon name: mail --> */}
										<svg
											className="-ml-1 mr-2 h-5 w-5 text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											></path>
										</svg>

										<span>Visit</span>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
							<h1 className="text-2xl font-bold text-gray-900 truncate">{course.name}</h1>
						</div>
					</div>
				</div>

				{/* <!-- Tabs --> */}
				<div className="mt-6 sm:mt-2 2xl:mt-5">
					<div className="border-b border-gray-200">
						<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
							<nav className="-mb-px flex space-x-8" aria-label="Tabs">
								{/* <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
								<a
									href="#"
									className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
								>
									Members
								</a>
								<a
									href="#"
									className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
									aria-current="page"
								>
									Posts
								</a>
							</nav>
						</div>
					</div>
				</div>

				{/* <!-- Description list --> */}
				<div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Notice</dt>
							<dd className="mt-1 text-sm text-gray-900">Please join the group to view and make posts</dd>
						</div>
					</dl>
				</div>
			</article>
		</div>
	);
}

CourseGroup.propTypes = {
	joinGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	
	courses: state.courses,
});
export default connect(mapStateToProps, { joinGroup })(CourseGroup);
