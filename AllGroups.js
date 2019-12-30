import React, {Component}  from "react"
import GroupCard from "./GroupCard"
import Title from "./Title"
import {GroupConsumer} from "./GroupContext"
import {GroupsData} from "./GroupsData"
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export default class AllGroups extends Component {
	state = {
	groups:GroupsData
	};
	render() {
	
    return (
    
    <StyleWrapper>
    <div class="page-body">
    <div class="font-s">
      
       
      		<Title  title="groups"/>
      		
        		<div className="searchBar">
        	
        	
        {/* Here should appear a search field for mentees */}
          			<form>
            			<input placeholder="Search a new group">
            			</input>
            			<button type="submit">SEARCH</button>
          			</form>
        	{/* Here should appear a "create a group" function  */}
      <div class="button"><NavLink to="/creategroup">+ Create a group</NavLink></div>
     	 		</div>
        	
      		
      		<div className="py-5">
       		<div className="container">
      		<Title  title="members"/>
      		<div className="row">
      		
      			<GroupConsumer>
      			
      			{value => {
      			return value.groups.map(group => {
      				return <GroupCard  key={group.id} group={group}/>;
      			});
      			}}
      			
      			</GroupConsumer>
      			</div>
      			</div>
      			</div>
      	
      </div>
      </div>
    </StyleWrapper>
    );
    
  }
  }
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