import React, { Fragment, useEffect, useState } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getAssignments } from '../../../Redux/Action/courses';
var parse = require('html-react-parser');

const AssignmentRow = ({ data }) => {
	const [showMore, setShowMore] = useState(false);

	const toggleMore = () => {
		setShowMore(!showMore);
	};
	return (
		<ul className="divide-y divide-gray-200">
			<li className="py-4">
				<div className="flex space-x-3">
					<div className="flex-1 space-y-1 bg-white sm:p-4 rounded">
						<div className="flex items-center justify-between ">
							<h3 className="text-sm font-medium ">{data.name}</h3>
							<span
								onClick={toggleMore}
								class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 cursor-pointer"
							>
								{/* <Moment >{data.due_at} </Moment> */}
								 <Moment fromNow >{data.due_at}</Moment>
								 
								{showMore ? (
								
									<svg
										class="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 15l7-7 7 7"
										></path>
									</svg>
								) : (
									<svg
										class="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										></path>
									</svg>
								)}
							</span>
						</div>

						{showMore ? (
							<>
							Due at: <Moment format ={"MMM Do"}>{data.due_at}</Moment>
							<p className="text-sm text-gray-500">{data.description && parse(data.description)}</p>
							</>
						) : null}
					</div>
				</div>
			</li>
		</ul>
	);
};

function Assignments({ courses, match, getAssignments }) {
	const { id } = match.params;
	useEffect(() => {
		getAssignments(id);

		{
			console.log('This is a course' + JSON.stringify(courses.assignments));
		}
	}, []);
	return (
		!courses.assignment_loading && (
			<Fragment>
				<div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 ">
					<div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded:sm shadow">
						<h3 className="text-lg leading-6 font-medium text-gray-900">Assignments</h3>
					</div>
					<div></div>
					<p className="mt-1 text-sm text-gray-500">
						{!courses.assignment_loading &&
							courses.assignments.map((item) => <AssignmentRow data={item} />)}
					</p>
				</div>
			</Fragment>
		)
	);
}

const mapStateToProps = (state) => ({
	courses: state.courses,
});
export default connect(mapStateToProps, { getAssignments })(Assignments);
