import React from 'react'
import imgSoon from "./CommingSoon.png"
export default function CommingSoon() {
    return (
        <div>
            
      <div style={{display:"flex", flexDirection:"column",alignContent:"center",alignItems:"center", padding:"20px"}}>
      <img src={imgSoon} alt="Comming Soon" height="400px" width="400px"></img>
    <p className="mt-1 max-w-2xl text-sm text-gray-500">More Features Comming Soon</p>
      </div>
     
        </div>
    )
}
