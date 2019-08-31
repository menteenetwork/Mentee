import React from "react"
import Title from "./Title"
import GroupColumns from "./GroupColumns"
import AllGroups from "./AllGroups"

function EmptyGroup () {
    return (
      <div className="container mt-5">
      	<div className="row">
      		<div className="col-10 mx-auto text center text-title">
      		<h3>You haven't joined any group yet</h3>
      			<AllGroups />
      		</div>
      	  </div>
      	</div>
      
      
      
    )
  }

 
export default EmptyGroup