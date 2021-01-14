import React, { Fragment ,useState} from 'react'

import iconStar from "./Star.png"
import iconFilledStar from "./FilledStar.png"
import Moment from "react-moment"
import { Link } from 'react-router-dom'
import imgDefault from "./default.png"
import Skeleton from 'react-loading-skeleton';
function TableRow({data}) {

    const [favourite] = useState(data.is_favorite?iconFilledStar:iconStar)
    
    
    return (
        <Fragment>
            <tr>
              <Link to ={`/course/${data.id}`}>
          
              <td class="px-6 py-4 whitespace-no-wrap">
              <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src={data.image_download_url ? data.image_download_url :imgDefault} alt=""/>
                  </div>
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {data.name ||  <Skeleton/>} 
                     
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {data.course_code ||  <Skeleton/>}
                    </div>
                  </div>
                </div>
                </div>
              </td>
              </Link>

              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {/* {data.enrollments[0].type == "ta" ? "Teacher" :"Student" } */}
                {data.enrollments[0].type ||  <Skeleton/>}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                <Moment format="YYYY/MM/DD" date ={data.start_at ||  <Skeleton/>} />
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <img src={favourite } height="25px" width="25px" ></img>
              </td>
            </tr>
        </Fragment>
    )
}



export default TableRow

