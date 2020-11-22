import React, { Fragment } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';

export default function Info({data,courseData,announcementData,submissionData}) {

    // const description = `<p class="vtbegenerated"><span style="font-family: 'Helvetica',sans-serif; color: #444444;">The purpose of these assignments are to get you familiar with the steps involved in entering products through a hierarchy level system into the ERP system.</span></p> <ul> <li style="margin-left: 0in;"><span style="font-size: 10.0pt; font-family: inherit; color: #444444;">The first assignment covers the creation of merchandise category hierarchies &amp; <span style="color: #444444; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13.3333px; font-style: normal; font-weight: normal; text-align: left; text-indent: 0px; white-space: normal; display: inline !important; float: none;">creation of the merchandise categories</span>. MC Hierarchies are the top levels for which products can be listed and Merchandise categories are placed respectively in each level.</span></li> <li style="margin-left: 0in;"><span style="font-size: 10.0pt; font-family: inherit; color: #444444;">The second assignment covers the creation of articles. The articles are added to the appropriate categories. This is where the spreadsheet provided allows you to create 3 articles using a reference article as a template.</span></li> <li style="margin-left: 0in;"><span style="font-size: 10.0pt; font-family: inherit; color: #444444;">The third assignment covers the creation of the relationships between the hierarchy levels. This will be where the relationships between the articles, categories, and their respective hierarchies are sorted.</span></li> </ul> <p class="vtbegenerated"><span style="font-size: 10.0pt; font-family: inherit; color: #444444;">Open the Word document<strong> Assignment Submission Sheet. </strong>As you complete the assignments, whenever the instructions ask you to take a screen-clip use the Snipping Tool to paste it to this Assignment Sheet. You will only submit this document one time for assignments #1-#3. </span><span style="font-size: 10.0pt; font-family: inherit; color: #444444;">When you have pasted the two Snippets required at the end of Assignment #3, use the link above to upload the Word document. <strong style="margin: 0px; padding: 0px; border: 0px; font-weight: bold; font-style: normal; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13.3333px; color: #444444; text-align: left; text-indent: 0px; white-space: normal; background-color: #f4f4f4;">Make sure to put your name, section number &amp; user-id in your submission document!<br></strong> </span></p> <div class="vtbegenerated"> <span style="font-size: 10.0pt; font-family: inherit; color: #444444;"><span class="instructure_file_link_holder link_holder"><span class="instructure_scribd_file_holder link_holder"><a class="instructure_file_link instructure_scribd_file" title="MARK3311-Assignment_Sheet.docx" href="https://uttyler.instructure.com/courses/21181/files/3020691/download?verifier=GrurBls1BWteCzMQ9m1yzbMVYPTn83uAhEQHIhDh&amp;wrap=1" target="" data-api-endpoint="https://uttyler.instructure.com/api/v1/courses/21181/files/3020691" data-api-returntype="File">Assignment Submission Sheet</a></span></span></span><span style="font-size: 10.0pt; font-family: inherit; color: #444444;"><span class="instructure_file_link_holder link_holder"><span class="instructure_scribd_file_holder link_holder"><a class="instructure_file_link instructure_scribd_file" title="MARK3311-SAP-Assgn-1-Hierarchies&amp;MCs.pdf" href="https://uttyler.instructure.com/courses/21181/files/3020569/download?verifier=Ny0wKPOoU4g1BYvlmae6tmpT2a0k5Kvxit6qFHHi&amp;wrap=1" target="" data-api-endpoint="https://uttyler.instructure.com/api/v1/courses/21181/files/3020569" data-api-returntype="File"></a></span></span></span> </div> <div class="vtbegenerated"><span style="font-size: 10.0pt; font-family: inherit; color: #444444;"><span class="instructure_file_link_holder link_holder"><span class="instructure_scribd_file_holder link_holder"><a class="instructure_file_link instructure_scribd_file" title="Assignment 1- Hierarchies and Merchandise Categoires.pdf" href="https://uttyler.instructure.com/courses/21181/files/3331685/download?verifier=m1BbS6pxtXKlYRyQIJtTgoJy6H7u1NUDKkNI7nBY&amp;wrap=1" data-api-endpoint="https://uttyler.instructure.com/api/v1/courses/21181/files/3331685" data-api-returntype="File">Assignment 1- Hierarchies and Merchandise Categories.pdf</a></span></span></span></div> <div class="vtbegenerated"> <span style="font-size: 10.0pt; font-family: inherit; color: #444444;"><span class="instructure_file_link_holder link_holder"><span class="instructure_scribd_file_holder link_holder"><a class="instructure_file_link instructure_scribd_file" title="Assignment 2- Creating Articles.pdf" href="https://uttyler.instructure.com/courses/21181/files/3331687/download?verifier=nXuUx3cPBIRVpwBQCPhgTiH5LbjT2xdWEPAlgYXJ&amp;wrap=1" data-api-endpoint="https://uttyler.instructure.com/api/v1/courses/21181/files/3331687" data-api-returntype="File">Assignment 2- Creating Articles.pdf</a></span></span></span><a class="instructure_file_link instructure_scribd_file" title="MARK3311-Assignment 2 Spreadsheet of Articles-1.xlsx" href="https://uttyler.instructure.com/courses/21181/files/3020506/download?verifier=u0MNhbk9WVIUrSl9lfrvPuxS4ZsZXOxRaa4EOaLh&amp;wrap=1" data-api-endpoint="https://uttyler.instructure.com/api/v1/courses/21181/files/3020506" data-api-returntype="File"><em></em></a> </div> <div class="vtbegenerated" style="padding-left: 30px;"><em><span style="font-size: 10pt; font-family: inherit; color: #444444;"><span class="instructure_file_link_holder link_holder"><span class="instructure_scribd_file_holder link_holder"><a class="instructure_file_link instructure_scribd_file" title="MARK3311-Assignment 2 Spreadsheet of Articles.xlsx" href="https://uttyler.instructure.com/courses/21181/files/3331689/download?verifier=v0EEmRMGhnAz0vsgyxFqioB22R6CEdObYjn9HGkS&amp;wrap=1" data-api-endpoint="https://uttyler.instructure.com/api/v1/courses/21181/files/3331689" data-api-returntype="File">MARK3311-Assignment 2 Spreadsheet of Articles.xlsx</a></span></span></span></em></div> <div class="vtbegenerated"><span style="font-size: 10.0pt; font-family: inherit; color: #444444;"><span class="instructure_file_link_holder link_holder"><span class="instructure_scribd_file_holder link_holder"><a class="instructure_file_link instructure_scribd_file" title="Assignment 3- Creating Relationships.pdf" href="https://uttyler.instructure.com/courses/21181/files/3331692/download?verifier=LvPq3BbfVAbXPe791A1U2lYmbWElIRFwCdsaIFMn&amp;wrap=1" target="" data-api-endpoint="https://uttyler.instructure.com/api/v1/courses/21181/files/3331692" data-api-returntype="File">Assignment #3 - Creating Relationships</a></span></span></span></div> <p><span style="text-decoration: underline;"><strong>All of your SAP assignments must be completed no later than 11:59 p.m. CST on October 11th (extension from October 4th)</strong></span></p>`
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
              {/* <span class="text-sm leading-5 font-medium text-gray-500">
                from 70,946
              </span> */}
            </div>
            {/* <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">
                Increased by
              </span>
              12%
            </div> */}
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
              {/* <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                from 28.62
              </span> */}
            </div>
            {/* <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0">
              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">
                Decreased by
              </span>
              4.05%
            </div> */}
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

              {/* <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                from 56.14%
              </span> */}
            </div>
            {/* <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">
                Increased by
              </span>
              2.02%
            </div> */}
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
                          {/* <CircularProgressbar value={submissionData} text={`${submissionData}%`} class /> */}

              {/* <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                from 56.14%
              </span> */}
            </div>
            {/* <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">
                Increased by
              </span>
              2.02%
            </div> */}
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
