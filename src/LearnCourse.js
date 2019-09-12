import React from "react"
import {
NavLink
}
 from "react-router-dom";
import styled from "styled-components"; 
  
function LearnCourse (){
return( 
	<div class="page-body">
		<div class="body-section">
			<StyledWrapper>
 		<p>Here we insert a course to be completed in steps</p>
  </StyledWrapper>
  	</div>
</div>
  )
}


export default LearnCourse

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