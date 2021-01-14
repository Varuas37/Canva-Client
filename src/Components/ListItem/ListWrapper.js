import React, { Fragment } from "react";


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



export default ListWrapper;
