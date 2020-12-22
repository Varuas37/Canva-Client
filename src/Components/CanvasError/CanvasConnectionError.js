import React from "react";
import PropTypes from "prop-types";
import CanvasAuthError from "./CanvasAuthError.png";
function CanvasConnectionError(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <img src={CanvasAuthError} height="600" width="600" />
     <div style={{display:"flex" , flexDirection:"column", gap:"4px", justifyContent:"center", alignItems:"center"}}>   
      <ul>
      <p>We are having problem connecting to canvas</p>
      <p>This might be due of few reasons</p>
         <li>1. Your canvas token might have expired</li>
         <li>2. Canvas server is no longer accepting our requests</li>
         <li>3. There might be a bug on our servers </li>
     </ul>
     <p>Please verify your canvas credentials, and contact us if you still have the issue</p>
     </div>
    </div>
  );
}

CanvasConnectionError.propTypes = {};

export default CanvasConnectionError;
