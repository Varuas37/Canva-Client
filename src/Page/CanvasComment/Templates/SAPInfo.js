import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { postSAPComments } from '../../../Redux/Action/submissions';
import PropTypes from 'prop-types';

function SAPInfo({ postSAPComments }) {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = async (data) => {
		
		postSAPComments(data);
	};
	const [toggleDigits, setToggleDigits] = useState(true);
	const handleToggle = (event) => {
		if (event.target.value == '2') {
			setToggleDigits(true);
		}
		if (event.target.value == '3') {
			setToggleDigits(false);
		}
	};
	return (
		<section>
			<div className="py-16 container m-auto px-6 bg-white rounded">
				<div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
					<form action="#" method="POST">
						<div class="sm:overflow-hidden">
							<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
								<div>
									<h3 class="text-lg leading-6 font-medium text-gray-900">SAP</h3>
									<p class="mt-1 text-sm text-gray-500">
										This information will be displayed publicly so be careful what you share.
									</p>
								</div>
							</div>
						</div>
					</form>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className="container mx-auto w-full max-w-lg p-10 rounded-2xl"
				>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block text-sm font-medium text-gray-700" for="courseID">
								Course ID
							</label>
							<input
								ref={register({ required: 'Course ID is required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="courseID"
								name="courseID"
								type="text"
								placeholder="2202"
							/>
							{errors.courseID && <p className="text-red-500 text-xs pt-1 ">{errors.courseID.message}</p>}
						</div>

						<div className="w-full md:w-1/2 px-3">
							<label className="block text-sm font-medium text-gray-700" for="assignmentID">
								Assignment ID
							</label>
							<input
								ref={register({ required: 'Assignment ID is required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="assignmentID"
								name="assignmentID"
								type="text"
								placeholder="13123"
							/>
							{errors.assignmentID && (
								<p className="text-red-500 text-xs pt-1 ">{errors.assignmentID.message}</p>
							)}
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block text-sm font-medium text-gray-700" for="clientID">
								Client ID
							</label>
							<input
								ref={register({ required: 'Required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="clientID"
								name="clientID"
								type="text"
								placeholder="525"
							/>
							{errors.clientID && <p className="text-red-500 text-xs pt-1 ">{errors.clientID.message}</p>}
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label className="block text-sm font-medium text-gray-700" for="system">
								System
							</label>
							<input
								ref={register({ required: 'Required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="system"
								name="system"
								type="text"
								placeholder="BRI"
							/>
							{errors.system && <p className="text-red-500 text-xs pt-1 ">{errors.system.message}</p>}
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block text-sm font-medium text-gray-700" for="sapServer">
								SAP Server
							</label>
							<input
								ref={register({ required: 'SAP Server is required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="sapServer"
								name="sapServer"
								type="text"
								placeholder="eg: BRISTOL.COB.CSUCHICO.EDU"
							/>
							{errors.sapServer && (
								<p className="text-red-500 text-xs pt-1 ">{errors.sapServer.message}</p>
							)}
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block text-sm font-medium text-gray-700" for="username">
								Username
							</label>
							<input
								ref={register({ required: 'Required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="username"
								name="username"
								type="text"
								placeholder="RET, BRI etc"
							/>
							{errors.username && <p className="text-red-500 text-xs pt-1 ">{errors.username.message}</p>}
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label className="block text-sm font-medium text-gray-700" for="lastDigits">
								Last
								<select
									ref={register({ required: 'Required' })}
									onChange={handleToggle}
									id="digitsNo"
									name="digitsNo"
									class="outline-none h-full py-0  border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
								>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								digits
							</label>

							<input
								ref={register({ required: 'Required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="lastDigits"
								name="lastDigits"
								type="text"
								placeholder={`${toggleDigits ? '01' : '001'}`}
							/>
							{errors.lastDigits && (
								<p className="text-red-500 text-xs pt-1 ">{errors.lastDigits.message}</p>
							)}
						</div>
					</div>

					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block text-sm font-medium text-gray-700" for="password">
								Password
							</label>
							<input
								ref={register({ required: 'Password is required' })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="password"
								name="password"
								type="text"
								placeholder="Insert the SAP password to assign to students"
							/>{' '}
							{errors.password && <p className="text-red-500 text-xs pt-1 ">{errors.password.message}</p>}
						</div>
					</div>

					<div className="flex items-center justify-between">
						<button
							className="bg-indigo-600 cursor-pointer border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							type="submit"
						>
							Submit
						</button>

						<Link
							to="/sap-instructions"
							className="inline-block align-baseline font-bold text-sm text-indigo-600"
						>
							Need Help?
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
}

SAPInfo.propTypes = {
	postSAPComments: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { postSAPComments })(SAPInfo);
