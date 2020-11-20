import React, { Fragment,useState } from "react";
import PropTypes from "prop-types";

function SidebarWrapper({props,toggle,children,setToggle} ) {

    // const[showSidebar,setShowSidebar] = useState(toggle);    
  return toggle? (
    <Fragment>
      <div class="fixed inset-0 overflow-hidden" style={{zIndex:"100"}}>
        <div class="absolute inset-0 overflow-hidden">
          <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            {/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <header class="p-6">
                  <div class="flex items-start justify-between space-x-3">
                    <h2 class="text-lg leading-7 font-medium text-gray-900">
                      Notifications
                    </h2>
                    <div class="h-7 flex items-center">
                      <button
                        aria-label="Close panel"
                        class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                        onClick={()=>setToggle(false)}
                      >
                        <svg
                          class="h-6 w-6"
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
                  </div>
                </header>
                <div class="border-b border-gray-200">
                  <div class="px-6">
                    <nav class="-mb-px flex space-x-6">
                      <a
                        href="#"
                        class="whitespace-no-wrap pb-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
                        aria-current="page"
                      >
                        Student
                      </a>

                      <a
                        href="#"
                        class="whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      >
                        Teaching
                      </a>
                      <a
                        href="#"
                        class="whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      >
                        Annoucements
                      </a>
                    </nav>


                  </div>
                </div>
                {children}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  ):null;
}

SidebarWrapper.propTypes = {};

export default SidebarWrapper;