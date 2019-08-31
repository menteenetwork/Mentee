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
      <div>
         
         	<div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         	<div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         	<div class="btn-group button"><NavLink to="/mynetworkgroups">MY GROUPS</NavLink></div>
        	
        	<TabContainer>
        		<div className="searchBar">
        {/* Here should appear a search field for mentees */}
          			<form>
            			<input placeholder="Search a new group">
            			</input>
            			<button type="submit">SEARCH</button>
          			</form>
        	
     	 		</div>
        	</TabContainer>
 			
       
        	
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
 		</div>
    )
  }

 
export default MyNetworkGroups


const TabContainer = styled.div``