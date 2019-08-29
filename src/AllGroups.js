import React, {Component}  from "react"
import GroupCard from "./GroupCard"
import Title from "./Title"
import {GroupConsumer} from "./GroupContext"
import {GroupsData} from "./GroupsData"
import styled from 'styled-components';

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
        	
          			<form>
            			<input placeholder="Search a group">
            			</input>
            			<button type="submit">SEARCH</button>
          			</form>
        	
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