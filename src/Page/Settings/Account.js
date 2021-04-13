import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
function Account({ auth }) {
  const [edit, setEdit] = useState(false);

  return (
    !auth.loading && (
      <Fragment>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <div>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div className="flex flex-row justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {" "}
                    <button onClick={() => setEdit(!edit)}>
                      {edit ? "Cancel" : "Edit"}
                    </button>
                  </p>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  {edit ? (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>

                      <input
                        type="text"
                        value={auth.user.name}
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  ) : (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        className="block text-md font-medium text-gray-700"
                      >
                        First name
                      </label>

                      <h1 className="text-gray-500 w-full text-base sm:text-base">
                        {auth.user.name}
                      </h1>
                    </div>
                  )}

                  {edit ? (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={auth.user.lastname}
                        id="last_name"
                        autocomplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  ) : (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        className="block text-md font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <h1 className="w-full text-gray-500 text-base sm:text-base">
                        {auth.user.lastname}
                      </h1>
                    </div>
                  )}
                  {edit ? (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        value={auth.user.email}
                        name="email"
                        id="email"
                        autocomplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  ) : (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="email"
                        className="block text-md font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <h1 className="text-gray-500 w-full text-base sm:text-base">
                        {auth.user.email}
                      </h1>
                    </div>
                  )}

                  {/* <div className="col-span-6 sm:col-span-3">
                    <label
                      for="schoolEmail"
                      className="block text-sm font-medium text-gray-700"
                    >
                      School Email
                    </label>
                    <input
                      type="text"
                      name="schoolEmail"
                      id="schoolEmail"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div> */}

                  {/* <div className="col-span-6 sm:col-span-3">
                    <label
                      for="user_type"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Type
                    </label>
                    <select
                      id="user_type"
                      name="user_type"
                      autocomplete="user_type"
                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Teacher</option>
                      <option>Student</option>
                    </select>
                  </div> */}
                  {/* <div className="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      University
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>University of Texas at Tyler</option>
                    </select>
                  </div> */}
                  {edit ? (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        About
                      </label>
                      <textarea
                        type="text"
                        name="about"
                        id="about"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  ) : (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="about"
                        className="block text-md font-medium text-gray-700"
                      >
                        About
                      </label>
                      <h1 className="text-gray-500 w-full text-base sm:text-base">
                        Hi I am Saurav
                      </h1>
                    </div>
                  )}
                </div>
              </div>
              {edit ? (
                <div className="flex flex-row space-x-4 px-4 justify-end py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={() => setEdit(false)}
                    className="bg-gray-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
}

Account.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Account);
