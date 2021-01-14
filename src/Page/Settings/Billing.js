import React, { Fragment } from 'react'


function Billing () {
  return (
    <Fragment>
      {/* <!-- Payment details --> */}
      <div class='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
        <section aria-labelledby='payment_details_heading'>
          <form action='#' method='POST'>
            <div class='shadow sm:rounded-md sm:overflow-hidden'>
              <div class='bg-white py-6 px-4 sm:p-6'>
                <div>
                  <h2
                    id='payment_details_heading'
                    class='text-lg leading-6 font-medium text-gray-900'
                  >
                    Payment details
                  </h2>
                  <p class='mt-1 text-sm text-gray-500'>
                    Update your billing information. Please note that updating
                    your location could affect your tax rates.
                  </p>
                </div>

                <div class='mt-6 grid grid-cols-4 gap-6'>
                  <div class='col-span-4 sm:col-span-2'>
                    <label
                      for='first_name'
                      class='block text-sm font-medium text-gray-700'
                    >
                      First name
                    </label>
                    <input
                      type='text'
                      name='first_name'
                      id='first_name'
                      autocomplete='cc-given-name'
                      class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                    />
                  </div>

                  <div class='col-span-4 sm:col-span-2'>
                    <label
                      for='last_name'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Last name
                    </label>
                    <input
                      type='text'
                      name='last_name'
                      id='last_name'
                      autocomplete='cc-family-name'
                      class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                    />
                  </div>

                  <div class='col-span-4 sm:col-span-2'>
                    <label
                      for='email_address'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Email address
                    </label>
                    <input
                      type='text'
                      name='email_address'
                      id='email_address'
                      autocomplete='email'
                      class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                    />
                  </div>

                  <div class='col-span-4 sm:col-span-1'>
                    <label
                      for='expiration_date'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Expration date
                    </label>
                    <input
                      type='text'
                      name='expiration_date'
                      id='expiration_date'
                      autocomplete='cc-exp'
                      class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                      placeholder='MM / YY'
                    />
                  </div>

                  <div class='col-span-4 sm:col-span-1'>
                    <label
                      for='security_code'
                      class='flex items-center text-sm font-medium text-gray-700'
                    >
                      <span>Security code</span>
                      {/* <!-- Heroicon name: question-mark-circle --> */}
                      <svg
                        class='ml-1 flex-shrink-0 h-5 w-5 text-gray-300'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </label>
                    <input
                      type='text'
                      name='security_code'
                      id='security_code'
                      autocomplete='cc-csc'
                      class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                    />
                  </div>

                  <div class='col-span-4 sm:col-span-2'>
                    <label
                      for='country'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Country / Region
                    </label>
                    <select
                      id='country'
                      name='country'
                      autocomplete='country'
                      class='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class='col-span-4 sm:col-span-2'>
                    <label
                      for='postal_code'
                      class='block text-sm font-medium text-gray-700'
                    >
                      ZIP / Postal
                    </label>
                    <input
                      type='text'
                      name='postal_code'
                      id='postal_code'
                      autocomplete='postal-code'
                      class='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                    />
                  </div>
                </div>
              </div>
              <div class='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  class='bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* <!-- Plan --> */}
        <section aria-labelledby='plan_heading'>
          <form action='#' method='POST'>
            <div class='shadow sm:rounded-md sm:overflow-hidden'>
              <div class='bg-white py-6 px-4 space-y-6 sm:p-6'>
                <div>
                  <h2
                    id='plan_heading'
                    class='text-lg leading-6 font-medium text-gray-900'
                  >
                    Plan
                  </h2>
                </div>

                <fieldset>
                  <legend class='sr-only'>Pricing plans</legend>
                  <ul class='relative bg-white rounded-md -space-y-px'>
                    <li>
                      {/* <!-- On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" --> */}
                      <div class='relative border rounded-tl-md rounded-tr-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3'>
                        <label class='flex items-center text-sm cursor-pointer'>
                          <input
                            name='pricing_plan'
                            type='radio'
                            class='h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300'
                            aria-describedby='plan-option-pricing-0 plan-option-limit-0'
                          />
                          <span class='ml-3 font-medium text-gray-900'>
                            Student
                          </span>
                        </label>
                        <p
                          id='plan-option-pricing-0'
                          class='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
                        >
                          {/* <!-- On: "text-orange-900", Off: "text-gray-900" --> */}
                          <span class='font-medium'>$2.99 / mo</span>
                          {/* <!-- On: "text-orange-700", Off: "text-gray-500" --> */}
                          <span>($30 / yr)</span>
                        </p>
                        {/* <!-- On: "text-orange-700", Off: "text-gray-500" --> */}
                        <p
                          id='plan-option-limit-0'
                          class='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                        >
                          All Pro Features
                        </p>
                      </div>
                    </li>

                    <li>
                      {/* <!-- On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" --> */}
                      <div class='relative border border-gray-200 p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3'>
                        <label class='flex items-center text-sm cursor-pointer'>
                          <input
                            name='pricing_plan'
                            type='radio'
                            class='h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300'
                            aria-describedby='plan-option-pricing-1 plan-option-limit-1'
                            checked
                          />
                          <span class='ml-3 font-medium text-gray-900'>
                            Individual Teacher
                          </span>
                        </label>
                        <p
                          id='plan-option-pricing-1'
                          class='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
                        >
                          {/* <!-- On: "text-orange-900", Off: "text-gray-900" --> */}
                          <span class='font-medium'>$9.99 / mo</span>
                          {/* <!-- On: "text-orange-700", Off: "text-gray-500" --> */}
                          <span>($105.99 / yr)</span>
                        </p>
                        {/* <!-- On: "text-orange-700", Off: "text-gray-500" --> */}
                        <p
                          id='plan-option-limit-1'
                          class='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                        >
                          Manage upto 5 classes
                        </p>
                      </div>
                    </li>

                    <li>
                      {/* <!-- On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" --> */}
                      <div class='relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3'>
                        <label class='flex items-center text-sm cursor-pointer'>
                          <input
                            name='pricing_plan'
                            type='radio'
                            class='h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300'
                            aria-describedby='plan-option-pricing-2 plan-option-limit-2'
                          />
                          <span class='ml-3 font-medium text-gray-900'>
                            Enterprise
                          </span>
                        </label>
                        <p
                          id='plan-option-pricing-2'
                          class='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
                        >
                          {/* <!-- On: "text-orange-900", Off: "text-gray-900" --> */}
                          <span class='font-medium'>$249 / mo</span>
                          {/* <!-- On: "text-orange-700", Off: "text-gray-500" --> */}
                          <span>($2490 / yr)</span>
                        </p>
                        {/* <!-- On: "text-orange-700", Off: "text-gray-500" --> */}
                        <p
                          id='plan-option-limit-2'
                          class='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                        >
                          Unlimited classes and users
                        </p>
                      </div>
                    </li>
                  </ul>
                </fieldset>

                <div class='flex items-center'>
                  {/* <!-- On: "bg-orange-500", Off: "bg-gray-200" --> */}
                  <button
                    type='button'
                    aria-pressed='true'
                    aria-labelledby='toggleLabel'
                    class='bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200'
                  >
                    <span class='sr-only'>Use setting</span>
                    {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                    <span
                      aria-hidden='true'
                      class='translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    ></span>
                  </button>
                  <span id='toggleLabel' class='ml-3'>
                    <span class='text-sm font-medium text-gray-900'>
                      Annual billing{' '}
                    </span>
                    <span class='text-sm text-gray-500'>(Save 10%)</span>
                  </span>
                </div>
              </div>
              <div class='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  class='bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* <!-- Billing history --> */}
        <section aria-labelledby='billing_history_heading'>
          <div class='bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden'>
            <div class='px-4 sm:px-6'>
              <h2
                id='billing_history_heading'
                class='text-lg leading-6 font-medium text-gray-900'
              >
                Billing history
              </h2>
            </div>
            <div class='mt-6 flex flex-col'>
              <div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                  <div class='overflow-hidden border-t border-gray-200'>
                    <table class='min-w-full divide-y divide-gray-200'>
                      <thead class='bg-gray-50'>
                        <tr>
                          <th
                            scope='col'
                            class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            Date
                          </th>
                          <th
                            scope='col'
                            class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            Description
                          </th>
                          <th
                            scope='col'
                            class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            Amount
                          </th>
                          {/* <!--`relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.--> */}
                          <th
                            scope='col'
                            class='relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            <span class='sr-only'>View receipt</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class='bg-white divide-y divide-gray-200'>
                        <tr>
                          <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            1/1/2021
                          </td>
                          <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            Business Plan - Annual Billing
                          </td>
                          <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            CA$109.00
                          </td>
                          <td class='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            <a
                              href='#'
                              class='text-orange-600 hover:text-orange-900'
                            >
                              View receipt
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

Billing.propTypes = {}

export default Billing
