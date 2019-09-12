import React from "react"
import AllGroups from "./AllGroups"
import Title from "./Title"
import {NavLink} from "react-router-dom";
import GroupColumns from "./GroupColumns"
import EmptyNetwork from "./EmptyNetwork"
import {MemberConsumer} from "./Context"
import MembersList from "./MembersList"
import styled from 'styled-components';

function GroupMembers () {
	return(
	
	<div class="page-body">
		<div class="body-section">
			<StyledWrapper>
	
		<MemberConsumer>
         
         {value =>{
         	const {MyNetworkMentees, inNetwork} = value;
         	
         	if(MyNetworkMentees.inNetwork = true){
         		return(
         		<React.Fragment>
         			<Title title="Group members" />
         			
      				
      				<MembersList value ={value}/>
      			</React.Fragment>
         		);
         	}else{
         		return  <EmptyNetwork />;
         	}
         	}}
         </MemberConsumer>
		</StyledWrapper>
  	</div>
</div>
  
 		
    )
  }

 
export default GroupMembers


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