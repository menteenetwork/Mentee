import React from "react"
import {NavLink,Route} from "react-router-dom";
import Title from "./Title"
import styled from "styled-components"; 
  
function GroupChannel ({match}){

return(
	<div class="page-body">
		<div class="body-section">
			<StyledWrapper>
 		
      			<h2>Group name:</h2>
   <NavLink to={`${match.url}/Anna's Graphic design classes`}>Anna's Graphic design classes</NavLink>
 	
 		
 		<Route path={`${match.path}/:name`} render= {({match}) =>( 
  	<div> 
  	<h3> {match.params.name} </h3></div>)}/>
 		<div>
 		{/* Here should appear the webcam boxes and chat messages from https://tox.chat 
 		
 		*/}
 		<img className="img-respons" src={"../../assets/images/icon-user-avatar.jpg"} alt="mentor"/>
 		<img className="img-respons" src={"../../assets/images/icon-user-avatar.jpg"} alt="mentee"/>
 		</div>
 		
 		<div>
 		<NavLink to="/members"><img className="img-responsive" src={"../../assets/images/icon-user.png"} alt="add mentee"/></NavLink>
		</div>
		<div>
 		<NavLink to="/creategroup"><img className="img-responsive" src={"../../assets/images/icon-group.png"} alt="create group"/></NavLink>
 		</div>
 		<div>
 		<NavLink to="/filetransfer"><img className="img-responsive" src={"../../assets/images/icon-transfer.png"} alt="files transfer"/></NavLink>
 		</div>
 		<div>
 		<NavLink to="/mynetworkmentees"><img className="img-responsive" src={"../../assets/images/icon-network.png"} alt="my network"/></NavLink>
 		</div>
  		</StyledWrapper>
  	</div>
</div>
  
  )
}


export default GroupChannel

const StyledWrapper = styled.div`

.font-s{
e

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