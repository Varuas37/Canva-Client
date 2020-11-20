import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Header({data,children}) {
  return data.length>0 ? (
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">{data}</h1>
        {children}
      </div>
    </header>
  ):<Fragment>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Bad Request</h1>
      </div>
    </header>
  </Fragment>;
}

Header.propTypes = {};

export default Header;
