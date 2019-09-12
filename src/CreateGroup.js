import React from "react"
import styled from 'styled-components';
 
function CreateGroup () {
    return (
    <div class="page-body">
    	<StyleWrapper>
    	<div class="body-section">
      		
        <h2>Create new group</h2>
        
      	</div>
      	</StyleWrapper>
    </div>
    )
  }

 
export default CreateGroup

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