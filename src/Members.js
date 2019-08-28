import React, {Component}  from "react"
import MemberCard from "./MemberCard"
import Title from "./Title"
import {MemberConsumer} from "./Context"
import {MembersData} from "./MembersData"
import styled from 'styled-components';

export default class Members extends Component {
	state = {
	members:MembersData
	};
	render() {
	
    return (
    
    
      <div>
       <React.Fragment>
      		<Title  title="members"/>
      		<TabContainer>
        		<div className="searchBar">
        	
          			<form>
            			<input placeholder="Search a member">
            			</input>
            			<button type="submit">SEARCH</button>
          			</form>
        	
     	 		</div>
        	</TabContainer>
      		
      		
      			<MemberConsumer>
      			{value => {
      			return value.members.map(member => {
      				return <MemberCard  key={member.id} member={member}/>;
      			});
      			}}
      			</MemberConsumer>
      	</React.Fragment>
      </div>
    );
    
  }
  }
const TabContainer = styled.div``