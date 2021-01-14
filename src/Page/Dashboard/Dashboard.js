import React, {  useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Cards from '../../Components/Cards/Cards';
import { getFavCourses } from '../../Redux/Action/courses';
import { getUserTodo } from '../../Redux/Action/todo';

import CardWrapper from '../../Components/Cards/CardWrapper';


import Skeleton from 'react-loading-skeleton';
import CanvasConnectionError from '../../Components/CanvasError/CanvasConnectionError';
import LogRocket from 'logrocket';
const Dashboard = ({
	auth,
	
	getFavCourses,
	courses: {  favouriteCourse },
	getUserTodo,
	
}) => {
	if (!auth.isAuthenticated) {
		<Redirect to="/"></Redirect>;
	}
	if (auth.isAuthenticated) {
		LogRocket.identify(`${auth.user._id}`, {
			name: `${auth.user.name}`,
			email: `${auth.user.email}`,

			// Add your own custom user variables here, ie:
			canvasDomain: `${auth.user.canvasDomain}`,
		});
	}
	useEffect(() => {
		getUserTodo();
	}, []);
	useEffect(() => {
		getFavCourses();
	}, []);

	

	if (!auth.isAuthenticated) {
		<Redirect to="/login" />;
	}

	if (!auth.user.canvasConnected) {
		window.location.replace('/canvasAuth');
	}

	

	return (
		auth.isAuthenticated && (
			<div style={{ padding: '20px' }} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Header data={auth.user && auth.user.name + ' ' + auth.user.lastname} />
				</div>

				{favouriteCourse ? (
					<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
						<div class="pt-2 pb-6 md:py-6">
							<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
							<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" style={{ marginTop: '5%' }}>
								<CardWrapper>
									{favouriteCourse && favouriteCourse.length > 0 ? (
										favouriteCourse.map((course) =>
											!course.access_restricted_by_date &&
											course.created_at &&
											course.type !== 'StudentEnrollment' ? (
												<Cards key={course.id} data={course}></Cards>
											) : null
										)
									) : (
										<div>
											<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
												<Skeleton />
											</ul>
										</div>
									)}
								</CardWrapper>
							</div>
						</div>
					</main>
				) : (
					<CanvasConnectionError />
				)}
			</div>
		)
	);
};

Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
	courses: PropTypes.object.isRequired,
	getFavCourses: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	courses: state.courses,
	todos: state.courses.user_todo,
	canvasAuth: state.canvasAuth,
});
export default connect(mapStateToProps, { getFavCourses, getUserTodo })(Dashboard);

{
	/* <span class="inline-flex rounded-md shadow-sm" style={{position:"absolute",right:"5%",top:"25%"} }>
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            onClick={()=>handleToggle()}
          >
            Toggle Tasksss
          </button>
        </span>  */
}
