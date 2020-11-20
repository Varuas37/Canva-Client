import React from "react";
import PropTypes from "prop-types";

function CardWrapper(props) {
  return (

    <div>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.children}
    </ul>
    </div>
  );
}

CardWrapper.propTypes = {};

export default CardWrapper;
