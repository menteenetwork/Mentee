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
      <div>
         
         	<div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         	<div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         	<div class="btn-group button"><NavLink to="/allgroups">MY GROUPS</NavLink></div>
        
        
        {/* Here should appear a search field for mentees */}
 			
        <TabContainer>
        	<div className="searchBar">
        	
          		<form>
            		<input placeholder="Add a new member">
            		</input>
            		<button type="submit">SEARCH</button>
          		</form>
        	
     	 	</div>
        </TabContainer>
        	
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
 		</div>
    )
  }

 
export default MyNetworkMentees


const TabContainer = styled.div``