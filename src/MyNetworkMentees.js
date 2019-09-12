import React from "react"
import Members from "./Members"
import Title from "./Title"
import {NavLink} from "react-router-dom";
import NetworkColumns from "./NetworkColumns"
import EmptyNetwork from "./EmptyNetwork"
import {MemberConsumer} from "./Context"
import MembersList from "./MembersList"
import styled from 'styled-components';

function MyNetworkMentees () {
    return (
      <div class="page-body">
      <div class="body-section">
		<StyledWrapper>
         
         	<div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         	<div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         	<div class="btn-group button"><NavLink to="/mynetworkgroups">MY GROUPS</NavLink></div>
        
        
        {/* Here should appear a search field for mentees */}
 			
        
        	<div className="searchBar">
        	
          		<form>
            		<input placeholder="Add a new member">
            		</input>
            		<button type="submit">SEARCH</button>
          		</form>
        	
     	 	</div>
       
        	
 		<MemberConsumer>
         
         {value =>{
         	const {MyNetworkMentees} = value;
         	if(MyNetworkMentees.length>0){
         		return(
         		<React.Fragment>
         			<Title title="My mentees" />
      				<NetworkColumns />
      				<MembersList value={value}/>
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

 
export default MyNetworkMentees


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