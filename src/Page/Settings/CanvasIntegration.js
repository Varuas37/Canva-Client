import React, { Fragment } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'

function CanvasIntegration(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
    return (
        <Fragment>
             <div class='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
        <form action='#' method='POST'>
          <div class='shadow sm:rounded-md sm:overflow-hidden'>
            <div class='bg-white py-6 px-4 space-y-6 sm:p-6'>
              <div>
                <h3 class='text-lg leading-6 font-medium text-gray-900'>
                  Canvas Integration
                </h3>
                <p class='mt-1 text-sm text-gray-500'>
                  We use your canvas token to connect our services. We encrypt your token and store it in our database. It is not shared with anyone.
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
                 Canvas Login
                </h3>
                <p class='mt-1 text-sm text-gray-500'>
                Please make sure to keep these credentials up to date.
                </p>
              </div>

              <div class='grid grid-cols-6 gap-6'>
                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='domainName'
                    class='block text-sm font-medium text-gray-700'
                  >
                    Domain
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
                    Token
                  </label>
                  <input
                    type='password'
                    name='canvasToken'
                    id='canvasToken'
                    autocomplete='family-name'
                    class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>

               

                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='country'
                    class='block text-sm font-medium text-gray-700'
                  >
                    University
                  </label>
                  <select
                    id='country'
                    name='country'
                    autocomplete='country'
                    class='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option>University of Texas at Tyler</option>
                  </select>
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

CanvasIntegration.propTypes = {

}

export default CanvasIntegration

