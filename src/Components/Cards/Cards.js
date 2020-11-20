import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import TableRow from "../TableRow/TableRow";
import "./Cards.css";
import imgDefault from "./default.png"
const Cards = ({ data }) => {
  return data ? (
    <Fragment>
      <Link to={`/courses/${data.id}`}>

        {/* Latest CArd */}
        <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
    <div class="flex-1 flex flex-col p-8">
      <img class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={data.image_download_url ?  data.image_download_url: imgDefault} alt="" style={{objectFit:"fill"}}/>
      <h3 class="mt-6 text-gray-900 text-sm leading-5 font-medium">  {data.course_code? data.course_code:null}</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        {data.teachers.length==1 ?
        (
          data.teachers.map((teacher)=>
            <dd class="text-gray-500 text-sm leading-5">{teacher.display_name}</dd>
          )
        ): <dd class="text-gray-500 text-sm leading-5">Multiple Instructors</dd>}
        
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span class="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">{data.enrollments[0].type =="student"? "Student" :"Teacher"}</span>
        </dd>
      </dl>
    </div>
    <div class="border-t border-gray-200">
      {/* <div class="-mt-px flex">
        <div class="w-0 flex-1 flex border-r border-gray-200">
          <a href="#" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
           
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span class="ml-3">Todo</span>
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <a href="#" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
           
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span class="ml-3">Grade</span>
          </a>
        </div>
      </div> */}
    </div>
  </li>





      </Link>
    </Fragment>
  ) : null;
};
export default Cards;
