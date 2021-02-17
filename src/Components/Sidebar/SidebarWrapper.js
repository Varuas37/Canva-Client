import React, { Fragment, useState } from "react";

function SidebarWrapper({ toggle, children, setToggle, setHeader, current }) {
  const [selectedclassName] = useState(
    "border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
  );
  const [teaching] = useState(
    "whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
  );
  const [student] = useState(
    "whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
  );

  return toggle ? (
    <Fragment>
      <div className="fixed inset-0 overflow-hidden" style={{ zIndex: "100" }}>
        <div className="absolute inset-0 overflow-hidden">
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <header className="p-6">
                  <div className="flex items-start justify-between space-x-3">
                    <h2 className="text-lg leading-7 font-medium text-gray-900">
                      Notifications
                    </h2>
                    <div className="h-7 flex items-center">
                      <button
                        aria-label="Close panel"
                        className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                        onClick={() => setToggle(false)}
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </header>
                <div className="border-b border-gray-200">
                  <div className="px-6">
                    <nav className="-mb-px flex space-x-6">
                      <div
                        style={{ cursor: "pointer" }}
                        className={
                          current == "submitting" ? selectedclassName : student
                        }
                        aria-current="page"
                        onClick={() => setHeader("submitting")}
                      >
                        Student
                      </div>

                      <div
                        style={{ cursor: "pointer" }}
                        className={
                          current == "grading" ? selectedclassName : teaching
                        }
                        onClick={() => setHeader("grading")}
                      >
                        Teaching
                      </div>
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
  ) : null;
}

export default SidebarWrapper;

{
  /* <!--
  Slide-over panel, show/hide based on slide-over state.

  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-full"
    To: "translate-x-0"
  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-0"
    To: "translate-x-full"
--> */
}
