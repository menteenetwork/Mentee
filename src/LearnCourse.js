import React from "react"
import {
NavLink,
Route
}
 from "react-router-dom";
  
function LearnCourse (){
return( 
	<div> 
 		<h3>Mathematics</h3>
 		<h2>Geometry</h2>
 	
 		<p>Title</p>
 		
 		<div class="button"><NavLink to="/members">SEARCH A MENTOR</NavLink></div>
 		<div class="button"><NavLink to="/allgroups">SEARCH A GROUP</NavLink></div>
  	</div>
  )
}


export default LearnCourse
