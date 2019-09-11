import React from "react"
import Members from "./Members"
import {NavLink} from "react-router-dom";
import styled from "styled-components"; 
  
function Group (){
return( 
	<div class="page-body">
		<div class="body-section">
			<StyledWrapper>
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
  			</StyledWrapper>
      	</div>
     </div>
  )
}


export default Group

const StyledWrapper = styled.div`

.font-s{
 a{
	color:black;
	text-decoration:none;
}}

.font-s{
a:hover{
	color:var(--darkGreen);
	text-decoration:none;

}
a.active {
	color:var(--darkGreen);
	text-decoration:none;
}
`