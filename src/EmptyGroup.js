import React from "react"
import Title from "./Title"
import GroupColumns from "./GroupColumns"
import AllGroups from "./AllGroups"
import styled from "styled-components"; 

function EmptyGroup () {
    return (
     <div class="page-body">
    	<StyleWrapper>
    
      <div className="container mt-5">
      	<div className="row">
      		<div className="col-10 mx-auto text center text-title">
      		<h3>You haven't joined any group yet</h3>
      			<AllGroups />
      		</div>
      	  </div>
      	</div>
    
     </StyleWrapper>
     </div>
      
    )
  }
const StyleWrapper = styled.div`

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
 
export default EmptyGroup