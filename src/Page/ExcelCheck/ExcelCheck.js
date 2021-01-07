import React, { useState,useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function ExcelCheck({}) {
	const { register, handleSubmit } = useForm();
  const [uploadedFile, setuploadedFile] = useState(null);
  const inputRef = useRef();
	const onChange = (data) => {
      setuploadedFile(data);		
	};
	const onSubmit = (data) => {
alert(JSON.stringify(data));
	};
	return (
		<>
			<form
				onChange={handleSubmit(onChange)}
				onSubmit={handleSubmit(onSubmit)}
				className="container mx-auto px-4 sm:px-6 lg:px-8
         space-y-8 divide-y divide-gray-200"
			>
				<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
					<div>
						<div>
							<h3 className="text-lg leading-6 font-medium text-gray-900">Upload</h3>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">
								Please upload the template file that you want to distribute to students
							</p>
						</div>

						<div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
							<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									for="fileName"
									className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
								>
									Template File
								</label>
								<div className="mt-2 sm:mt-0 sm:col-span-2">
									<div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
										<div className="space-y-1 text-center">
											{uploadedFile ? (
											<div className="flex justify-center items-center ">
													{' '}
													<svg
														className={`w-12 h-12 ${
															uploadedFile ? `text-green-600` : `text-gray-600`
														}`}
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
														></path>
													</svg>
                          <p>{uploadedFile ? uploadedFile.fileName[0].name :null}</p>
											</div>
											) : (
												<svg
													className="mx-auto h-16 w-16 text-gray-400"
													stroke="currentColor"
													fill="none"
													viewBox="0 0 30 30"
													aria-hidden="true"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
													></path>
												</svg>
											)}
											<div className="flex text-sm text-gray-600">
												<label
													for="fileName"
													className="relative flex justify-center items-center cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
												>
                          	<input
                            ref={register}
														id="fileName"
														name="fileName"
														type="file"
														className="sr-only"
													/>
												 	{uploadedFile?<span>Choose a different file</span>:<span>Upload a file</span>}
												</label>
											
											</div>
									{uploadedFile?null:<p className="text-xs text-gray-500">.xlsx upto 1MB</p>}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
{uploadedFile? 
					<div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
						<div>
							<h3 className="text-lg leading-6 font-medium text-gray-900">Assignment Information</h3>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">
								Please fill the following information
							</p>
						</div>
						<div className="space-y-6 sm:space-y-5">
							<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									for="selectedCourse"
									className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
								>
									Class Name
								</label>
								<div className="mt-1 sm:mt-0 sm:col-span-2">
									<select
										id="selectedCourse"
										name="selectedCourse"
                    ref={register}
										className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
									>
										<option>MARK - 3311</option>
										<option>MANA 3305</option>
										<option>MARK 3311-001</option>
									</select>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									for="assignmentID"
									className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
								>
									Assignment ID
								</label>
								<div className="mt-1 sm:mt-0 sm:col-span-2">
									<input
                    type="text"
                    ref={register}
										name="assignmentID"
										id="assignmentID"
									
										className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
									/>
								</div>
							</div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
								<label
                  for="excelPassword"
                  type="password"
                  ref={register}
									className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
								>
									Excel Password
								</label>
								<div className="mt-1 sm:mt-0 sm:col-span-2">
									<input
										type="text"
										name="excelPassword"
										id="excelPassword"
                    
                    
										className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
									/>
								</div>
							</div>
						</div>
					</div>:null}
				</div>

				<div className="pt-5">
					<div className="flex justify-end">
						<button
							type="button"
							className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Continue
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

ExcelCheck.propTypes = {};

export default ExcelCheck;
