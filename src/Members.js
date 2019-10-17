import React, {Component}  from "react"
import MemberCard from "./MemberCard"
import Title from "./Title"
import {MemberConsumer} from "./Context"
import {MembersData} from "./MembersData"
import styled from 'styled-components'
import SearchUser from "./SearchUser"

export default class Members extends Component {
	state = {
	members:MembersData
	};
	render() {
	
    return (
  
    
      <div>
       <React.Fragment>
       <div className="section">
        		<div className="searchBar">
        	
          			<form>
            			<SearchUser/>
          			</form>
        	
     	 		</div>
        	</div>
       	<div className="py-5">
       		<div className="container">
      		<Title  title="members"/>
      		<div className="row">
      		
      		
      		
      			<MemberConsumer>
      			{value => {
      			return value.members.map(member => {
      				return <MemberCard  key={member.id} member={member}/>;
      			});
      			}}
      			</MemberConsumer>
      		</div>
      		</div>
      		</div>
      		
      	</React.Fragment>
      </div>
    );
    
  }
  }
const TabContainer = styled.div``