import React from "react"
import styled from 'styled-components';
import {
NavLink,
}
 from "react-router-dom";
 

function MyNetworkMentors () {
    return (
      <div>
         
         <TabContainer>
         <div class="btn-group button"><NavLink to="/mynetworkmentees">MY MENTEES</NavLink></div>
         <div class="btn-group button"><NavLink to="/mynetworkmentors">MY MENTORS</NavLink></div>
         <div class="btn-group button"><NavLink to="/groups">MY GROUPS</NavLink></div>
        	</TabContainer>
         
        	<ul>
        	<p>+  Search mentor
        	</p>
        	{/* Here should appear a search field for mentees
        
       	 	Here should appear a list of mentees user has in his own network		
 			*/}
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
  			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			<p>Alice<div class="button"><NavLink to="/chathistory">CHAT</NavLink></div></p>
 			</ul>
        
      </div>
    )
  }

 
export default MyNetworkMentors
const TabContainer = styled.div``