import React from "react"
import Members from "./Members"
import {
NavLink,
}
 from "react-router-dom";
  
function Group (){
return( 
	<div> 
 		<h2>Anna's Graphic design classes</h2>
 		
 		<p>Anna's graphic design courses can prepare you for a wide range of careers, from video game design to marketing. 
 		Whether you want to learn a new design software like Affinity Designer, improve your drawing skills, or start your own design business, Anna has a course to help you achieve your goals.</p>
 		What will you learn:
 		- How to use Photoshop
 		- Affinity Designer
 		- CAD
 		- Web design
 		
		<h4>Access group channel</h4>
 		<div class="button"><NavLink to="/groupchannel">ACCESS</NavLink></div>
 		
 		
 		<Members />
  	</div>
  )
}


export default Group
