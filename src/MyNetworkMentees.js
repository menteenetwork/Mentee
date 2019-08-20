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
         <TabContainer>
         <div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         <div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         <div class="btn-group button"><NavLink to="/groups">MY GROUPS</NavLink></div>
        	</TabContainer>
        	<ul>
        	<p>+  Search mentee</p>
        	{/* Here should appear a search field for mentees 
        
       	 	Here should appear a list of mentees user has in his own network		
 			*/}
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
 			
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
  			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			</ul>
         <section>
         
      	
      	
      </section>
      </div>
      
     
    )
  }

 
export default MyNetworkMentees


const TabContainer = styled.div``