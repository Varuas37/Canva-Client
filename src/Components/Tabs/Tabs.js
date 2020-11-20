import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Tabs=(props)=> {
    return (
        <Fragment>
            <div>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <select id="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
      <option>My Account</option>
      <option>Company</option>
      <option selected>Team Members</option>
      <option>Billing</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <nav class="flex space-x-4" aria-label="Tabs">
    <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-indigo-700 bg-indigo-100" aria-current="page">
        Home
      </a>
      <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-500 hover:text-gray-700" >
        Assignments
      </a>
      <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-500 hover:text-gray-700">
        Grades
      </a>
    
      <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-500 hover:text-gray-700">
        
      </a>
    </nav>
  </div>
</div>

        </Fragment>
    )
}

Tabs.propTypes = {

}

export default Tabs

