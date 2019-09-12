import React from "react"
import styled from 'styled-components';
 
function Contact () {
    return (
      <div class="page-body">
      <StyleWrapper>
      	<div class="body-section">
      
        	<h2>GOT QUESTIONS?</h2>
        	<p>Contact <a href="http://mentee.network/contact">us</a>
        	</p>
        </div>
        </StyleWrapper>
      </div>
    )
  }

 
export default Contact

const StyleWrapper = styled.div`

.font-s{
color:black;
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