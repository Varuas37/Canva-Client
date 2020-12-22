import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function UserHome( {auth: { user,isAuthenticated }}) {

    return  (
        <div>
            Hello
        </div>
    )
}

UserHome.propTypes = {

}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  export default connect(mapStateToProps,  null )(UserHome);
  