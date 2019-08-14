import React, {Component}  from "react"
import MemberCard from "./MemberCard"
import Title from "./Title"
import {MemberConsumer} from "./Context"
import {MembersData} from "./MembersData"

export default class Members extends Component {
	state = {members:MembersData};
	render() {
	
    return (
    
    
      <div>
       <ul>
        {["Alice Smith", "Alexandra McCartney", "Xi Zhao", "David Clooney", "Joe Black"].map((user,idx)=>{
        return <li key={idx}>{user}</li>;})}
        </ul>
      	<React.Fragment>
      	
      		<Title name="our" title="members"/>
      		
      		
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
