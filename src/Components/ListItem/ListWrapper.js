import React, { Fragment } from "react";
import PropTypes from "prop-types";

function ListWrapper(props) {
  return (
    <Fragment>
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          <li>
              {props.children}
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

ListWrapper.propTypes = {};

export default ListWrapper;
