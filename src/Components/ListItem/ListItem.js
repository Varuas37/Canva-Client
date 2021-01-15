import React, { Fragment, useState } from 'react';
import Moment from 'react-moment';
import imgDropdown from './dropdown.png';
import imgDropup from './dropup.png';
var parse = require('html-react-parser');

function ListItem({ title, subtitle, subtitleText, calendar, html_url, type, needsgrading, message }) {
	const [showDetails, setShowDetails] = useState(true);
	return (
		<Fragment>
			<div class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
				<div class="px-4 py-4 sm:px-6">
					<div
						class="flex items-center justify-between"
						onClick={() => setShowDetails(!showDetails)}
						style={{ cursor: 'pointer' }}
					>
						<div
							class="text-sm leading-5 font-medium text-indigo-600 truncate"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignContent: 'center',
								alignItems: 'center',
							}}
						>
							{title}
							<img src={showDetails ? imgDropdown : imgDropup} height="25px" width="25px"></img>
						</div>

						{calendar ? (
							<div class="ml-2 flex-shrink-0 flex">
								<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
									{type == 'grading' ? `${needsgrading}` : <Moment from={calendar}></Moment>}
								</span>
               
							</div>
						) : null}
					</div>
					<div class="bg-gray-50 sm:rounded-lg">
						<div className={`px-4 py-5 sm:p-6 ${showDetails ? 'hidden' : null}`}>
							<div class="canvas_message">
								<p>{message && parse(message)}</p>
							</div>
							<a
								href={html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 max-w-xl text-sm text-blue-500"
							>
								View on Canvas
							</a>
						</div>
					</div>

					<div class="mt-2 sm:flex sm:justify-between">
						<div class="sm:flex">
							<div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
								{/* <!-- Heroicon name: users --> */}
								<p>{subtitleText} </p>
								{subtitle}
							</div>
							{/* <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                
                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Remote
              </div> */}
						</div>
						<div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
							{/* <!-- Heroicon name: calendar --> */}
							{calendar ? (
								<svg
									class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									/>
								</svg>
							) : null}
							<span>
								{' '}
								{calendar ? (
									<time datetime="2020-01-07">
										<Moment date={calendar} format="MMM DD on h a">Posted at:</Moment>
									</time>
								) : null}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default ListItem;
