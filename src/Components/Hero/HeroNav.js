import React,{Fragment} from 'react'
import { Link } from "react-router-dom";

import { mainLogo, heroImage } from "../../Static/Images/images";
export default function HeroNav() {
    return (
        <Fragment>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#" aria-label="Home">
                    <svg class="w-10 h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        id="main-menu"
                        aria-label="Main menu"
                        aria-haspopup="true"
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4">
                  <Link to="/"
                   
                    className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Home
                  </Link>
                  <a
                    href="#"
                    className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Features
                  </a>
              
                  <Link to="/pricing"
                    className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/login"
                    className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out"
                  >
                    Log in
                  </Link>
                </div>
              </nav>
            </div>
        </Fragment>
    )
}
