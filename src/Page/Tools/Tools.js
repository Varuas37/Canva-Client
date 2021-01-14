import React from "react";


import { Link } from "react-router-dom";

const ToolRow = ({title,link})=>{
    return(

        <section>
          <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div className="ml-4 mt-2">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {title}
                </h3>
              </div>
              <div className="ml-4 mt-2 flex-shrink-0">
                <Link
                  type="button"
                  to={link}
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   
                >
                  Start
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}

function Tools() {
  return (
    <>
      <div className="py-16 container m-auto px-6">
        <h1 className="text-4xl font-bold leading-tight mb-5"> Tools</h1>
         <ToolRow title={"Excel Sheet Generator"} link={"/ExcelCheck"}/>
         <ToolRow title={"SAP User Info"} link={"/SAP"}/>

      </div>
    </>
  );
}

Tools.propTypes = {};

export default Tools;
