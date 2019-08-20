import React from "react"
import Title from "./Title"
import NetworkColumns from "./NetworkColumns"

function EmptyNetwork () {
    return (
      <div className="container mt-5">
      	<div className="row">
      		<div className="col-10 mx-auto text center text-title">
      		<h3>You have no members in your network</h3>
      		</div>
      	  </div>
      	</div>
    )
  }

 
export default EmptyNetwork