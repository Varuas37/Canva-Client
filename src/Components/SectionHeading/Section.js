import React, { Fragment } from "react";


function Section({data}) {
  return (
    <Fragment>
      <div class="pb-5 border-b border-gray-200">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
         {data}
        </h3>
      </div>
    </Fragment>
  );
}



export default Section;
