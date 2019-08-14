import React from "react"
import styled from "styled-components";
 
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
bacground: transparent;
border: 0.05rem solid var(--mainGreen);
color: var(--mainGreen);
border-radius:0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;

&:hover {
	bacground: var(--mainGreen);
	color: var(mainWhite);
}
&:focus {
	outline:none;
}
`;