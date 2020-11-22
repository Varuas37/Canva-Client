import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Skeleton from 'react-loading-skeleton';

function Header({data,children}) {
  return data? (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">{data || <Skeleton/>}</h1>
        {children}
      </div>
    </header>
  ):<Fragment>
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900"><Skeleton/></h1>
      </div>
    </header>
  </Fragment>;
}

export default Header;
