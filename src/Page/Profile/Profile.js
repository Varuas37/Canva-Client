import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import auth from '../../Redux/reducers/auth';


const Profile = ({ auth }) => {
	return !auth.loading && (
		<Fragment>
			<div className="container mx-auto sm:px-6 lg:px-8 ">
				<article>
					{/* <!-- Profile header --> */}
					<div>
						<div className="h-32 w-full lg:h-48">
            {/* bg-gradient-to-br from-yellow-800 rounded m-2 to-green-500  */}
							<img
								class="h-32 w-full object-cover lg:h-48"
								src={"https://source.unsplash.com/random;w=1950&amp;q=80"}
								alt=""
							/>
						</div>
						<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
							<div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
								<div class="flex">
									<img
										class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
										src={auth.user.avatar}
										alt=""
									/>
								</div>
								<div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
									<div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
										<h1 class="text-2xl font-bold text-gray-900 truncate">{auth.user.name}+{auth.user.lastname}</h1>
									</div>
									<div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
										<button
											type="button"
											class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
										>
											{/* <!-- Heroicon name: mail --> */}
											<svg
												class="-ml-1 mr-2 h-5 w-5 text-gray-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
												<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
											</svg>
											<span>Email</span>
										</button>
										{/* <button
											type="button"
											class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
										>
									
											<svg
											class="-ml-1 mr-2 h-5 w-5 text-gray-400"
												fill="currentColor"
												stroke="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
												></path>
											</svg>
											<span>Add Friend</span>
										</button> */}
									</div>
								</div>
							</div>
							<div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
								<h1 class="text-2xl font-bold text-gray-900 truncate">Saurav</h1>
							</div>
						</div>
					</div>

					{/* <!-- Tabs --> */}
					<div class="mt-6 sm:mt-2 2xl:mt-5">
						<div class="border-b border-gray-200">
							<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
								<nav class="-mb-px flex space-x-8" aria-label="Tabs">
									{/* <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                  {/* <a
										href="#"
										class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
									>
										Friends
									</a> */}
                	<a
										href="#"
										class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
										aria-current="page"
									>
										Profile
									</a>
								</nav>
							</div>
						</div>
					</div>

					{/* <!-- Description list --> */}
					<div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
							<div class="sm:col-span-1">
								<dt class="text-sm font-medium text-gray-500">Type</dt>
								<dd class="mt-1 text-sm text-gray-900">Student</dd>
							</div>

							<div class="sm:col-span-1">
								<dt class="text-sm font-medium text-gray-500">Graduation Year</dt>
								<dd class="mt-1 text-sm text-gray-900">2022</dd>
							</div>

							<div class="sm:col-span-1">
								<dt class="text-sm font-medium text-gray-500">Major</dt>
								<dd class="mt-1 text-sm text-gray-900">Computer Science</dd>
							</div>

							<div class="sm:col-span-2">
								<dt class="text-sm font-medium text-gray-500">About</dt>
								<dd class="mt-1 max-w-prose text-sm text-gray-900">
									<p>
										I made this website.
									</p>
									<p class="mt-5">
										I hope you love it. Please let me know if you want more features.
									</p>
								</dd>
							</div>
						</dl>
					</div>

					{/* <!-- Mutual Classes List --> */}
					<div class="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
						{/* <h2 class="text-sm font-medium text-gray-500">Current Classes</h2> */}
						<div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
							{/* <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
								<div class="flex-shrink-0">
									<img
										class="h-10 w-10 rounded-full"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div class="flex-1 min-w-0">
									<a href="#" class="focus:outline-none">
										<span class="absolute inset-0" aria-hidden="true"></span>
										<p class="text-sm font-medium text-gray-900">MANA-3305</p>
										<p class="text-sm text-gray-500 truncate">Student</p>
									</a>
								</div>
                
							</div> */}
              {/* <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
								<div class="flex-shrink-0">
									<img
										class="h-10 w-10 rounded-full"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div class="flex-1 min-w-0">
									<a href="#" class="focus:outline-none">
										<span class="absolute inset-0" aria-hidden="true"></span>
										<p class="text-sm font-medium text-gray-900">MANA-3305</p>
										<p class="text-sm text-gray-500 truncate">Student</p>
									</a>
								</div>
                
							</div> */}
						</div>
					</div>
				</article>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, null)(Profile);
