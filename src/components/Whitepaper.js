import React from "react"
 import styled from "styled-components"; 
 
 
function Whitepaper () {
    return (
      <div class="page-body">
		<div class="body-section">
			<StyledWrapper>
       <div class="body-section">
        <h2>MENTEE WHITEPAPER</h2>
        
        <p>
		insert link here
		</p>
		</div>
      </StyledWrapper>
  	</div>
</div>
    )
  }

 
export default Whitepaper

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
