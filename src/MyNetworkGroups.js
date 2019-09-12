import React from "react"
import AllGroups from "./AllGroups"
import Title from "./Title"
import {NavLink} from "react-router-dom";
import GroupColumns from "./GroupColumns"
import EmptyGroup from "./EmptyGroup"
import {GroupConsumer} from "./GroupContext"
import GroupsList from "./GroupsList"
import styled from 'styled-components';

function MyNetworkGroups () {
    return (
      <div class="page-body">
      <div class="body-section">
		<StyledWrapper>
			
         
         	<div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         	<div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         	<div class="btn-group button"><NavLink to="/mynetworkgroups">MY GROUPS</NavLink></div>
        	
        	
        		<div className="searchBar">
        {/* Here should appear a search field for mentees */}
          			<form>
            			<input placeholder="Search a new group">
            			</input>
            			<button type="submit">SEARCH</button>
          			</form>
        	
     	 		</div>
        	
 			
       
        	
 		<GroupConsumer>
         
         {value =>{
         	const {MyNetworkGroups} = value;
         	if(MyNetworkGroups.length>0){
         		return(
         		<React.Fragment>
         			<Title title="My groups" />
      				<GroupColumns />
      				<GroupsList value={value}/>
      			</React.Fragment>
         		);
         	}else{
         		return  <EmptyGroup />;
         	}
         	}}
         </GroupConsumer>
 		</StyledWrapper>
 		</div>
	</div>
 		
    )
  }

 
export default MyNetworkGroups

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