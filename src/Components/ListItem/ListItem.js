import PropTypes from 'prop-types'
import React,{Fragment} from 'react'
import Moment from 'react-moment'

function ListItem({data,title,subtitle,subtitleText,calendar,html_url,type,needsgrading}) {
    return (
        <Fragment>
            <a href={html_url} target="_blank" rel="noopener noreferrer" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
              {title}
            </div>
            {calendar? <div class="ml-2 flex-shrink-0 flex">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
               {type == "grading" ? `${needsgrading}`: <Moment from={ calendar}></Moment>}
               {console.log(type)}
              </span>
            </div>:null}
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                {/* <!-- Heroicon name: users --> */}
    <p>{subtitleText} {" "}</p>
                {subtitle}
              </div>
              {/* <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                
                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Remote
              </div> */}
            </div>
            <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
              {/* <!-- Heroicon name: calendar --> */}
           { calendar?   <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>:null}
              <span>
                 {" "}
                {calendar? <time datetime="2020-01-07"><Moment date={calendar} format="MMM DD on h a"></Moment></time>:null}
              </span>
            </div>
          </div>
        </div>
      </a>
        </Fragment>
    )
}

ListItem.propTypes = {

}

export default ListItem

