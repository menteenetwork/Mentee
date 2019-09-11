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
	
	
		<div><p>List of all members belonging to this group</p>
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
		</div>
  
 		
    )
  }

 
export default GroupMembers


const TabContainer = styled.div``