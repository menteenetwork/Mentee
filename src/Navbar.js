import React from "react"
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

function Navbar () {
    return (
      <StyledWrapper>
      <div className="nav-container">
      	<div clasName="nav">
      </div>
        		<div className="logo">
        			
       					 <NavLink to="/">
        <img src={"../../assets/images/mentee___white--horizontal.png"} class="img-fluid"  class="ml-3" style={{width: "10rem", height: "3.9rem"}} alt="mentee logo">
							</img>
						</NavLink>
					
       			 </div>
        	</div>
      </StyledWrapper>
    )
  }

 
export default Navbar
const StyledWrapper = styled.div`
.logo{
a:hover{
	text-decoration:none;
	background-color:transparent;
}
}

`