import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
function Account({ auth }) {
	return (
		!auth.loading && (
			<Fragment>
				<div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
					<form action="#" method="POST">
						<div class="shadow sm:rounded-md sm:overflow-hidden">
							<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
								<div>
									<h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
									<p class="mt-1 text-sm text-gray-500">
										This information will be displayed publicly so be careful what you share.
									</p>
								</div>
							</div>
						</div>
					</form>

					<form action="#" method="POST">
						<div class="shadow sm:rounded-md sm:overflow-hidden">
							<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
								<div>
									<h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
									<p class="mt-1 text-sm text-gray-500">
										
									</p>
								</div>

								<div class="grid grid-cols-6 gap-6">
                  
									<div class="col-span-6 sm:col-span-3">
										<label for="first_name" class="block text-sm font-medium text-gray-700">
											First name
										</label>
										<input
											type="text"
											value={auth.user.name}
											name="first_name"
											id="first_name"
											autocomplete="given-name"
											class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="last_name" class="block text-sm font-medium text-gray-700">
											Last name
										</label>
										<input
											type="text"
											name="last_name"
											value={auth.user.lastname}
											id="last_name"
											autocomplete="family-name"
											class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
									<div class="col-span-6 sm:col-span-3">
										<label for="email" class="block text-sm font-medium text-gray-700">
											Email address
										</label>
										<input
											type="text"
											value={auth.user.email}
											name="email"
											id="email"
											autocomplete="email"
											class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
									<div class="col-span-6 sm:col-span-3">
										<label for="schoolEmail" class="block text-sm font-medium text-gray-700">
											School Email
										</label>
										<input
											type="text"
											name="schoolEmail"
											id="schoolEmail"
											class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>

							

									<div class="col-span-6 sm:col-span-3">
										<label for="user_type" class="block text-sm font-medium text-gray-700">
											Type
										</label>
										<select
											id="user_type"
											name="user_type"
											autocomplete="user_type"
											class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										>
											<option>Teacher</option>
											<option>Student</option>
										</select>
									</div>
									<div class="col-span-6 sm:col-span-3">
										<label for="country" class="block text-sm font-medium text-gray-700">
											University
										</label>
										<select
											id="country"
											name="country"
											autocomplete="country"
											class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										>
											<option>University of Texas at Tyler</option>
										</select>
									</div>
								</div>
							</div>
							<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button
									type="submit"
									class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Update
								</button>
							</div>
						</div>
					</form>
				</div>
			</Fragment>
		)
	);
}

Account.propTypes = {};
const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, null)(Account);
