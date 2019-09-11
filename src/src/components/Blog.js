import React from "react"
import styled from 'styled-components';
 
function Blog() {
    return (
    <StyleWrapper>
    	<div class="page-body">
       		<div class="body-section">
        		<h2>BLOG</h2>
       		 	<p>read our blog</p>
        	</div>
    	</div>
    </StyleWrapper>
    )
  }

 
export default Blog

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