import React, { Fragment } from "react";
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {removeAlert} from "../../Redux/Action/alert"
const Alert=({alerts,removeAlert})=> alerts!==null && alerts.length>0 && alerts.map( alert => (
    <Fragment>


      <div className="fixed inset-10 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-100">
  {/* <!--
    Notification panel, show/hide based on alert state.

    Entering: "transform ease-out duration-300 transition"
      From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      To: "translate-y-0 opacity-100 sm:translate-x-0"
    Leaving: "transition ease-in duration-100"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
  <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
    <div className="p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0" style={{justifyContent:"center"}}>   
       <i className={alert.icon} style={{color:"red"}}/>
       {console.log(alert.icon)}
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          <p className={`text-sm font-medium text-${alert.alertType}-900`}>
           {alert.title}
          </p>
          <p className={`mt-1 text-sm text-${alert.alertType}-500`}>
           {alert.msg}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={removeAlert}>
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </Fragment>
));
 
Alert.propTypes={
    alerts: PropTypes.array.isRequired,
    removeAlert: PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
    alerts: state.alert
})
export default connect(mapStateToProps,{removeAlert}) (Alert);