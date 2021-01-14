import React, { Fragment } from 'react'

export default function Info({data,courseData,announcementData,submissionData}) {

    return courseData&&announcementData&&(
        <Fragment>
  

<div >
 
  <div class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-3">
    <div >
      <div class="px-4 py-5 sm:p-6" >
        <dl>
          <dt class="text-base leading-6 font-normal text-gray-900">
            Total Tasks
          </dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex ml-2 items-baseline text-2xl leading-8 font-semibold text-indigo-600">
            {data.length}
        
            </div>
            
          </dd>
        </dl>
      </div>
    </div>
    <div class="border-t border-gray-200 md:border-0 md:border-l" > 
      <div class="px-4 py-5 sm:p-6">
        <dl>
          <dt class="text-base leading-6 font-normal text-gray-900">
            Announcemnts
          </dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
              {announcementData.length}
            
            </div>
       
          </dd>
        </dl>
      </div>
    </div>
    {courseData.needs_grading_count? <div class="border-t border-gray-200 md:border-0 md:border-l">
      <div class="px-4 py-5 sm:p-6">
         <dl>
          <dt class="text-base leading-6 font-normal text-gray-900">
           Needs Grading
          </dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
             {courseData.needs_grading_count}

    
            </div>
       
          </dd>
        </dl>
      </div>
    </div>:<Fragment>
      <div className="border-t border-gray-200 md:border-0 md:border-l">

     
    <div class="px-4 py-5 sm:p-6">
         <dl>
          <dt class="text-base leading-6 font-normal text-gray-900">
           Current Grade
          </dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
             {submissionData ? submissionData.data[0].computed_current_score:null} %
                        
            </div>
        
          </dd>
        </dl>
      </div>
      </div>

      </Fragment>}

  </div>
</div>


        </Fragment>
    )
}
