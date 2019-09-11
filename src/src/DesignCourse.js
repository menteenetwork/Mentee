import React from "react"
import styled from "styled-components"; 
  
function DesignCourse (){
return( 
	<div class="page-body">
	 
		<div class="body-section">
			<StyledWrapper>
 			<h3>Choose main category</h3>
 			<h3>Write course name</h3>
 			<h3>Step 1</h3>
 			</StyledWrapper>
  		</div>
  	</div>
  	
  )
}


export default DesignCourse

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