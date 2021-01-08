import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function Privacy (props) {
  return (
    <Fragment>
      <div class='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
        <form action='#' method='POST'>
          <div class='shadow sm:rounded-md sm:overflow-hidden'>
            <div class='bg-white py-6 px-4 space-y-6 sm:p-6'>
              <div>
                <h3 class='text-lg leading-6 font-medium text-gray-900'>
                  Privacy
                </h3>
                <p class='mt-1 text-sm text-gray-500'>
                  We only store minimum data to run our services and do not
                  share it with anyone.
                </p>
              </div>
            </div>
          </div>
        </form>

        <form action='#' method='POST'>
          <div class='shadow sm:rounded-md sm:overflow-hidden'>
            <div class='bg-white py-6 px-4 space-y-6 sm:p-6'>
              <div>
                <h3 class='text-lg leading-6 font-medium text-gray-900'>
                  Password
                </h3>
                <p class='mt-1 text-sm text-gray-500'>
                  This is seperate from your canvas token. Please keep this
                  password strong and unique.
                </p>
              </div>

              <div class='grid grid-cols-6 gap-6'>
                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='domainName'
                    class='block text-sm font-medium text-gray-700'
                  >
                    Current Password
                  </label>
                  <input
                    type='text'
                    name='domainName'
                    id='domainName'
                    autocomplete='given-name'
                    class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='canvasToken'
                    class='block text-sm font-medium text-gray-700'
                  >
                    New Password
                  </label>
                  <input
                    type='password'
                    name='canvasToken'
                    id='canvasToken'
                    autocomplete='family-name'
                    class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
            <div class='px-4 py-3 bg-gray-50 text-right sm:px-6'>
              <button
                type='submit'
                class='bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

Privacy.propTypes = {}

export default Privacy
