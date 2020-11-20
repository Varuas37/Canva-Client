import React ,{Fragment}from 'react'
import PropTypes from 'prop-types'
import Moment from "react-moment"
function SidebarItem({title,dueDate}) {
    return (
        <Fragment>
       


         
          <li class="px-6 py-5 relative">
            <div class="group flex justify-between items-center space-x-2">
              <a href="#" class="-m-1 p-1 block">
                <span class="absolute inset-0 group-hover:bg-gray-50"></span>
                <div class="flex-1 flex items-center min-w-0 relative">
                  <span class="flex-shrink-0 inline-block relative">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full text-white shadow-solid bg-green-400"></span>
                  </span>
                  <div class="ml-4 truncate">
                    <div class="text-sm leading-5 font-medium text-gray-900 truncate">{title}</div>
                    <div class="text-sm leading-5 text-gray-500 truncate"><Moment from={dueDate}></Moment></div>
                  </div>
                </div>
              </a>
       
            </div>
          </li>
      
        </Fragment>
    )
}

SidebarItem.propTypes = {

}

export default SidebarItem

