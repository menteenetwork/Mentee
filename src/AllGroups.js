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
    
    
      <div>
       <React.Fragment>
      		<Title  title="groups"/>
      		<TabContainer>
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
        	</TabContainer>
      		
      		
      			<GroupConsumer>
      			{value => {
      			return value.groups.map(group => {
      				return <GroupCard  key={group.id} group={group}/>;
      			});
      			}}
      			</GroupConsumer>
      	</React.Fragment>
      </div>
    );
    
  }
  }
const TabContainer = styled.div``