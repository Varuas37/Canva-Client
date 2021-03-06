import React, { Fragment } from 'react'
// import { useForm } from "react-hook-form";




function CanvasIntegration() {
    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit=(data)=>{
    //     console.log(data);
    // }
    return (
        <Fragment>
             <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
        <form action='#' method='POST'>
          <div className='shadow sm:rounded-md sm:overflow-hidden'>
            <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Canvas Integration
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  We use your canvas token to connect our services. We encrypt your token and store it in our database. It is not shared with anyone.
                </p>
              </div>
            </div>
          </div>
        </form>

        <form action='#' method='POST'>
          <div className='shadow sm:rounded-md sm:overflow-hidden'>
            <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                 Canvas Login
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                Please make sure to keep these credentials up to date.
                </p>
              </div>

              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    for='domainName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Domain
                  </label>
                  <input
                    type='text'
                    name='domainName'
                    id='domainName'
                    autocomplete='given-name'
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    for='canvasToken'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Token
                  </label>
                  <input
                    type='password'
                    name='canvasToken'
                    id='canvasToken'
                    autocomplete='family-name'
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>

               

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    for='country'
                    className='block text-sm font-medium text-gray-700'
                  >
                    University
                  </label>
                  <select
                    id='country'
                    name='country'
                    autocomplete='country'
                    className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option>University of Texas at Tyler</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
              <button
                type='submit'
                className='bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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

