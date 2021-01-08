import React, { Fragment, useState, useEffect } from 'react';
import { mainLogo } from '../../Static/Images/images';
import logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { disconnectCanvas } from '../../Redux/Action/canvasauth';
import { logout } from '../../Redux/Action/auth';
import SidebarWrapper from '../Sidebar/SidebarWrapper';
import SidebarItem from '../Sidebar/SidebarItem';
// import OutsideAlerter from "../OutsideAlert/OutsideAlert";
const Navbar = ({ auth, logout, todo, disconnectCanvas }) => {
	const [openProfile, setOpenProfile] = useState(false);
	const [toggleSidebar, setToggleSidebar] = useState(false);
	const [ClickedHeader, setClickedHeader] = useState('submitting');
	const [openMenu, setOpenMenu] = useState(true);
	const handleToggle = () => {
		console.log(toggleSidebar);
		setToggleSidebar(!toggleSidebar);
	};
	const handleLogout = () => {
		disconnectCanvas();
		logout();
	};
	useEffect(() => {}, [ClickedHeader]);
	return (
		auth.isAuthenticated && (
			<Fragment>
				<nav className="bg-gray-800" style={{ position: 'relative' }}>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* <!-- Mobile menu button--> */}
								<button
									className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
									aria-label="Main menu"
									aria-expanded="false"
									onClick={() => setOpenMenu(!openMenu)}
								>
									{/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
									{/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
									<svg
										className="hidden h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<NavLink to="/">
									<div className="flex-shrink-0">
										<svg
											class="w-10 h-10 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
											></path>
										</svg>
										{/* <img
                  className="hidden lg:block h-8 w-auto"
                  src={mainLogo}
                  alt="Workflow logo"
                /> */}
									</div>
								</NavLink>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex">
										<NavLink
											exact
											to="/dashboard"
											activeClassName="text-white bg-gray-900  "
											className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
										>
											Dashboard
										</NavLink>
										<NavLink
											to="/courses"
											className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
										>
											Courses
										</NavLink>
										<Link
											exact
											to="/tools"
											href="#"
											className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
										>
											Tools
										</Link>
										{/* <NavLink exact to ="Schedule"
                    href="#"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Calendar
                  </NavLink> */}
									</div>
								</div>
							</div>
              {/* <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0"> */}
							<div class="max-w-xs w-full">
								<label for="search" class="sr-only">
									Search
								</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
										{/* <!-- Heroicon name: search --> */}
										<svg
											class="flex-shrink-0 h-5 w-5 text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<input
										name="search"
										id="search"
										class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
										placeholder="Search"
										type="search"
									/>
								</div>
							</div>
              {/* </div> */}
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
									aria-label="Notifications"
									onClick={() => handleToggle()}
								>
									{/* <!-- Heroicon name: bell --> */}
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										/>
									</svg>
								</button>

								{/* <!-- Profile dropdown --> */}
								<div className="ml-3 relative">
									<div>
										<button
											className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
											id="user-menu"
											aria-label="User menu"
											aria-haspopup="true"
										>
											<img
												className="h-8 w-8 rounded-full"
												src={auth.user && auth.user.avatar}
												alt=""
												onClick={() => setOpenProfile(!openProfile)}
											/>
										</button>
									</div>
									{/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
									{openProfile ? (
										<div
											className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
											style={{ zIndex: '1' }}
										>
											<div
												className="py-1 rounded-md bg-white shadow-xs"
												role="menu"
												aria-orientation="vertical"
												aria-labelledby="user-menu"
											>
												<Link
													to="/profile"
													className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
													role="menuitem"
												>
													Your Profile
												</Link>
												<Link
													to="/settings"
													className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
													role="menuitem"
												>
													Settings
												</Link>
												<Link
													to="/"
													href="#"
													className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
													role="menuitem"
													onClick={handleLogout}
												>
													Sign out
												</Link>
											</div>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</div>

					{/* <!--
    Mobile menu, toggle classNamees based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
					<div className={openMenu ? `hidden sm:hidden` : 'sm:hidden'}>
						<div className="px-2 pt-2 pb-3">
							<Link
								to="/"
								className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							>
								Dashboard
							</Link>
							<Link
								to="/courses"
								className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							>
								Courses
							</Link>
							<Link
								to="/tools"
								className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							>
								Tools
							</Link>
							{/* <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Schedule

            </a> */}
						</div>
					</div>
				</nav>
				{/* {alert(ClickedHeader)} */}
				<SidebarWrapper
					toggle={toggleSidebar}
					setToggle={setToggleSidebar}
					setHeader={setClickedHeader}
					current={ClickedHeader}
				>
					<ul className="divide-y divide-gray-200 overflow-y-auto">
						{todo && todo.length > 0 ? (
							todo.map(
								(item) =>
									item.type == ClickedHeader && (
										<SidebarItem
											key={item.assignment.id}
											title={item.assignment.name}
											dueDate={item.assignment.due_at}
											description={item.assignment.description}
										/>
									)
							)
						) : (
							<h2>Items not found</h2>
						)}
					</ul>
				</SidebarWrapper>
			</Fragment>
		)
	);
};
Navbar.propTypes = {
	auth: PropTypes.object.isRequired,
	todo: PropTypes.array.isRequired,
	logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	todo: state.courses.todo,
});
export default connect(mapStateToProps, { logout, disconnectCanvas })(Navbar);
